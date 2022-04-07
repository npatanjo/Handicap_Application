import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interface/users';

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        token: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'Checkout the new user: ', this);
});

export default mongoose.model<IUser>("User", UserSchema)