import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interface/users';
import { ObjectId } from 'mongodb';

/**
 *
 * creates schema for users
 * @param {string} username the username of the user [required]
 * @param {string} password the password of the user [required]
 * @param {string} gender the gender (male or female) of the user [required]
 *
 */
const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true }
    },
    {
        /**
         * creates a time stamp on the collection
         */
        timestamps: true
    }
);

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'Checkout the new user: ', this);
});

/**
 *
 * @interface IUser this way we can use all the vars
 * @path "../interface/users"
 *
 */
export default mongoose.model<IUser>('User', UserSchema);
