"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
var http_1 = require("http");
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var logging_1 = require("./config/logging");
var config_1 = require("./config/config");
var mongoose_1 = require("mongoose");
var users_1 = require("./routes/users");
var courses_1 = require("./routes/courses");
/**
 *
 * determains where our logs are coming from
 *
 * @constant {string} NAMESPACE
 *
 */
var NAMESPACE = 'Server';
/**
 *
 * defines behavior
 *
 * @constant app
 *
 */
var app = (0, express_1["default"])();
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
mongoose_1["default"]
    .connect('mongodb+srv://dev:gnu@cluster0.98mj3.mongodb.net/hanicap-database?retryWrites=true&w=majority', config_1["default"].mongo.options)
    .then(function (result) {
    logging_1["default"].info(NAMESPACE, 'Mongo Connected');
})["catch"](function (error) {
    logging_1["default"].error(NAMESPACE, error.message, error);
});
/**
 *
 * @purpose logging all requests
 *
 */
app.use(function (req, res, next) {
    /** Log the req */
    logging_1["default"].info(NAMESPACE, "METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - IP: [").concat(req.socket.remoteAddress, "]"));
    res.on('finish', function () {
        /** Log the res */
        logging_1["default"].info(NAMESPACE, "METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - STATUS: [").concat(res.statusCode, "] - IP: [").concat(req.socket.remoteAddress, "]"));
    });
    next();
});
/**
 *
 * allows the use of nested json for later use
 * @purpose parsing the requests
 *
 */
app.use(body_parser_1["default"].urlencoded({ extended: true }));
/**
 *
 * takes care of json parsing and stringfy on the frontend
 * @purpose parsing the requests
 *
 */
app.use(body_parser_1["default"].json());
/**
 *
 * allows for PUT, POST, PATCH, DELETE, and GET
 *
 * @todo currently allows any origin. must be changed later
 * @purpose rules for API
 *
 */
app.use(function (req, res, next) {
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
app.use('/api/users', users_1["default"]);
app.use('/api/courses', courses_1["default"]);
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
app.use(function (req, res, next) {
    var error = new Error('Not found');
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
var httpServer = http_1["default"].createServer(app);
httpServer.listen(config_1["default"].server.port, function () { return logging_1["default"].info(NAMESPACE, "Server is running ".concat(config_1["default"].server.hostname, ":").concat(config_1["default"].server.port)); });
