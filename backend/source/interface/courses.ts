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
<<<<<<< HEAD
    ratings: [
        {
            color: string;
            gender: string;
            par: string;
            courseRating18: string;
            bogeyRating18: string;
            slopeRating18: string;
            front9: string;
            back9: string;
        }
    ];
=======
    ratings: [{}];
>>>>>>> fd7cbce3c765e91e03a4c78bae0bec02a59feeef
}
