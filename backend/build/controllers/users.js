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
exports.updatePassword = exports.getUsersByName = exports.deleteUser = exports.authenticateUser = exports.getAllUsers = exports.createUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("../models/users"));
/**
 *
 * creates a new user
 * @param {object} req the request send from the server
 * @param res
 * @param next
 * @returns {status code} 200 or 500
 *
 */
const createUser = (req, res, next) => {
    let { username, password, gender, token } = req.body;
    const user = new users_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        username,
        password,
        gender,
        token
    });
    return user
        .save()
        .then((result) => {
        return res.status(201).json({
            user: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.createUser = createUser;
/**
 *
 * @param req
 * @param res
 * @param next
 */
const deleteUser = (req, res, next) => {
    let u = req.params.u;
    console.log(u);
    users_1.default.findOneAndRemove({ username: u })
        .exec()
        .then((result) => {
        return res.status(200).json({ result });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.deleteUser = deleteUser;
/**
 *
 * @param {object} req the request send from the server
 * @param res
 * @param next
 * @returns {status code} 200 or 500
 *
 */
const getAllUsers = (req, res, next) => {
    users_1.default.find()
        .exec()
        .then((results) => {
        return res.status(200).json({
            users: results,
            count: results.length
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.getAllUsers = getAllUsers;
const getUsersByName = (req, res, next) => {
    users_1.default.findOne({ username: req.params.u })
        .exec()
        .then((results) => {
        return res.status(200).json({
            users: results
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.getUsersByName = getUsersByName;
const updatePassword = (req, res, next) => {
    users_1.default.findOneAndUpdate({ username: req.params.u }, { password: req.params.p })
        .exec()
        .then((results) => {
        return res.status(200).json({
            message: `Password for ${req.params.u} successfully changed`
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.updatePassword = updatePassword;
const authenticateUser = (req, res, next) => { };
exports.authenticateUser = authenticateUser;
