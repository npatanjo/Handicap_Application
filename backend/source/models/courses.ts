/**
 *
 * @author Nate Patnjo
 *
 */

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import logging from '../config/logging';
import ICourse from '../interface/courses';
import IRating from '../interface/ratings';
import { ObjectId } from 'mongodb';

const RatingsSchema: Schema = new Schema({
    color: { type: String },
    gender: { type: String },
    par: { type: String },
    courseRating18: { type: String },
    bogeyRating18: { type: String },
    slopeRating18: { type: String },
    front9: { type: String },
    back9: { type: String }
});

const CourseSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    ratings: [RatingsSchema]
});

CourseSchema.post<ICourse>('save', function () {
    logging.info('Mongo', 'Checkout the new course: ', this);
});

export default mongoose.model<ICourse>('Course', CourseSchema);
