"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
exports.updatePassword = exports.getUsersByName = exports.deleteUser = exports.authenticateUser = exports.getAllUsers = exports.createUser = void 0;
var mongoose_1 = require("mongoose");
var users_1 = require("../models/users");
/**
 *
 * creates a new user
 * @param {object} req the request send from the server
 * @param res
 * @param next
 * @returns {status code} 200 or 500
 *
 */
var createUser = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password, gender = _a.gender, token = _a.token;
    var user = new users_1["default"]({
        _id: new mongoose_1["default"].Types.ObjectId(),
        username: username,
        password: password,
        gender: gender,
        token: token
    });
    return user
        .save()
        .then(function (result) {
        return res.status(201).json({
            user: result
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
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
var deleteUser = function (req, res, next) {
    var u = req.params.u;
    console.log(u);
    users_1["default"].findOneAndRemove({ username: u })
        .exec()
        .then(function (result) {
        return res.status(200).json({ result: result });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
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
var getAllUsers = function (req, res, next) {
    users_1["default"].find()
        .exec()
        .then(function (results) {
        return res.status(200).json({
            users: results,
            count: results.length
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.getAllUsers = getAllUsers;
var getUsersByName = function (req, res, next) {
    users_1["default"].findOne({ username: req.params.u })
        .exec()
        .then(function (results) {
        return res.status(200).json({
            users: results
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.getUsersByName = getUsersByName;
var updatePassword = function (req, res, next) {
    users_1["default"].findOneAndUpdate({ username: req.params.u }, { password: req.params.p })
        .exec()
        .then(function (results) {
        return res.status(200).json({
            message: "Password for ".concat(req.params.u, " successfully changed")
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.updatePassword = updatePassword;
var authenticateUser = function (req, res, next) { };
exports.authenticateUser = authenticateUser;
