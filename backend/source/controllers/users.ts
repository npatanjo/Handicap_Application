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
    let { username, password, gender } = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(), //mongoose build id generator
        username,
        password,
        gender
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

const putUser = (req: Request, res: Response, next: NextFunction) => {
    return req.body;
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    console.log('TLDKJFLSKDJF');
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

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {};

export { createUser, getAllUsers, authenticateUser, putUser, deleteUser };
