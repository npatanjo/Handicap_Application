import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';

/**
 *
 * determains where our logs are coming from
 *
 * @constant {string} NAMESPACE
 *
 */
const NAMESPACE = 'Server';

/**
 *
 * defines behavior
 *
 * @constant router
 *
 */
const router = express();

/**
 *
 * @purpose logging all requests
 *
 */
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/**
 *
 * allows the use of nested json for later use
 * @purpose parsing the requests
 *
 */
router.use(bodyParser.urlencoded({ extended: false }));

/**
 *
 * takes care of json parsing and stringfy on the frontend
 * @purpose parsing the requests
 *
 */
router.use(bodyParser.json());

/**
 *
 * allows for PUT, POST, PATCH, DELETE, and GET
 *
 * @todo currently allows any origin. must be changed later
 * @purpose rules for API
 *
 */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/**
 *
 * error handling
 *
 * @returns {status code} request not found: 404
 *
 * todo
 * @returns {status code} - : 405
 * @returns {status code} - : 400
 * todo
 *
 */

router.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

/**
 *
 * @purpose creates server
 *
 *
 *
 */
const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
