/**
 *
 * @author Nate Patnjo
 *
 */

import { Document } from 'mongoose';

/**
 *
 * creates an interfave for users
 *
 */
export default interface IUser extends Document {
    username: string;
    password: string;
    gender: string;
}
