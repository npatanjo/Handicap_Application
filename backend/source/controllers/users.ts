import { NextFunction, Request, Response } from 'express';
import User from "../models/users"

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
    .exec()
    .then(results => {
        return res.status(200).json({
            users: results,
            count: results.length
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

export default { getAllUsers };
