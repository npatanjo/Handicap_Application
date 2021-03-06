"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    ///poolSize: 50,
    autoIndex: false,
    retryWrites: false
};
/** Change later. for mongo db database used for project */
var MONGO_USERNAME = process.env.MONGO_USERNAME || '';
var MONGO_PASSWORD = process.env.MONGO_USERNAME || '';
var MONGO_HOST = process.env.MONGO_URL || "";
var MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://dev:gnu711@cluster0.98mj3.mongodb.net/hanicap-database?retryWrites=true&w=majority';
var MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: "mongodb://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(MONGO_HOST)
};
/**
 *
 * the hostname from .env - if the hostname does not exist it will defailt to localhost
 *
 * @constant {string} SERVER_HOSTNAME
 */
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
/**
 *
 * the port from .env - if the port does not exist it will defailt to 1337
 *
 * @constant {integer} SERVER_PORT
 */
var SERVER_PORT = process.env.SERVER_PORT || 1337;
/**
 *
 * the server hostname and the server port
 *
 * @constant {object} SERVER
 */
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
/**
 *
 * an object to access the server port and hostname
 *
 * @usage config.SERVER.SERVER_HOSTNAME
 *
 * @constant {object} config
 */
var config = {
    mongo: MONGO,
    server: SERVER
};
exports["default"] = config;
