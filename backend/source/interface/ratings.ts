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
export default interface IRating extends Document {
    color: string;
    gender: string;
    par: string;
    courseRating18: string;
    bogeyRating18: string;
    slopeRating18: string;
    front9: string;
    back9: string;
}
