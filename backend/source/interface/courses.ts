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
export default interface ICourse extends Document {
    name: string;
    ratings: [{}];
}
