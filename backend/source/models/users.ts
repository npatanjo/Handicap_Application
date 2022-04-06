import mongoose from 'mongoose';
import { Schema } from 'mongoose';
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

export default mongoose.model<IUser>("User", UserSchema)