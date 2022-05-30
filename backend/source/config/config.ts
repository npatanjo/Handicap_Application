/**
 *
 * @author Nate Patanjo
 *
 */

import dotenv from 'dotenv';

dotenv.config();

/**
 *
 * the hostname from .env - if the hostname does not exist it will defailt to localhost
 *
 * @constant {string} SERVER_HOSTNAME
 */
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
/**
 *
 * the port from .env - if the port does not exist it will defailt to 1337
 *
 * @constant {integer} SERVER_PORT
 */

const SERVER_PORT = process.env.SERVER_PORT || 1337;

/**
 *
 * the server hostname and the server port
 *
 * @constant {object} SERVER
 */
const SERVER = {
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

const config = {
    server: SERVER
};

export default config;
