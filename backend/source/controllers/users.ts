/**
 *
 * @author Nate Patnjo
 *
 */

import { application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/users';

/**
 *
 * creates a new user
 * @param {object} req the request send from the server
 * @param res
 * @param next
 * @returns {status code} 200 or 500
 *
 */
const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { username, password, gender, token } = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(), //mongoose build id generator
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

/**
 *
 * @param req
 * @param res
 * @param next
 */
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    let u = req.params.u;
    console.log(u);
    User.findOneAndRemove({ username: u })
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

/**
 *
 * @param {object} req the request send from the server
 * @param res
 * @param next
 * @returns {status code} 200 or 500
 *
 */
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
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

const getUsersByName = (req: Request, res: Response, next: NextFunction) => {
    User.findOne({ username: req.params.u })
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

const updatePassword = (req: Request, res: Response, next: NextFunction) => {
    User.findOneAndUpdate({ username: req.params.u }, { password: req.params.p })
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

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {};

export { createUser, getAllUsers, authenticateUser, deleteUser, getUsersByName, updatePassword };
