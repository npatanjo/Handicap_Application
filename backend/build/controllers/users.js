"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("../models/users"));
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
