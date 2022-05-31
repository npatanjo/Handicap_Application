"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
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
 * @constant app
 *
 */
const app = (0, express_1.default)();
/**
 *
 * @todo should be changed to grab from config file as opposed to direct
 * input
 *
 * @purpose connect to mongo
 *
 */
/**mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });
    */
mongoose_1.default
    .connect('mongodb+srv://dev:gnu711@cluster0.98mj3.mongodb.net/hanicap-database?retryWrites=true&w=majority', config_1.default.mongo.options)
    .then((result) => {
    logging_1.default.info(NAMESPACE, 'Mongo Connected');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
/**
 *
 * @purpose logging all requests
 *
 */
app.use((req, res, next) => {
    /** Log the req */
    logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});
/**
 *
 * allows the use of nested json for later use
 * @purpose parsing the requests
 *
 */
app.use(body_parser_1.default.urlencoded({ extended: true }));
/**
 *
 * takes care of json parsing and stringfy on the frontend
 * @purpose parsing the requests
 *
 */
app.use(body_parser_1.default.json());
/**
 *
 * allows for PUT, POST, PATCH, DELETE, and GET
 *
 * @todo currently allows any origin. must be changed later
 * @purpose rules for API
 *
 */
app.use((req, res, next) => {
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
 * @purpose routes
 *
 */
app.use('/api/users', users_1.default);
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
app.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
/** create server: to start server: yarn serve*/
/**
 *
 * @purpose creates server
 * @usage starting server: yarn serve
 *
 *
 */
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server is running ${config_1.default.server.hostname}:${config_1.default.server.port}`));
