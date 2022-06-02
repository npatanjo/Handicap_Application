/**
 *
 * @author Nate Patnjo
 *
 */

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import logging from '../config/logging';
import ICourse from '../interface/courses';
import { ObjectId } from 'mongodb';

const CourseSchema: Schema = new Schema({
    name: { type: String, required: true },
    ratings: [
        {
            color: String,
            gender: String,
            par: String,
            courseRating18: String,
            bogeyRating18: String,
            slopeRating18: String,
            front9: String,
            back9: String
        }
    ]
});

CourseSchema.post<ICourse>('save', function () {
    logging.info('Mongo', 'Checkout the new course: ', this);
});

export default mongoose.model<ICourse>('Course', CourseSchema);
