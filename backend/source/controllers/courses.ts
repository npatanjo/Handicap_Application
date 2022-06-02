/**
 *
 * @author Nate Patnjo
 *
 */

import { json } from 'body-parser';
import { application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Course from '../models/courses';

const addCourse = (req: Request, res: Response, next: NextFunction) => {
    let name = req.body.course_name;
    let ratings = addCourseHelper(req.body.course_ratings);
    const course = new Course({
        name,
        ratings
    });
    return course
        .save()
        .then((result) => {
            return res.status(201).json({
                course: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

/**
 *
 * @param ratings the ratings from the inputed json. This rating is formatted for python
 * @returns the new formatted rating. this rating is formatted for JS/TS
 */
function addCourseHelper(ratings: any) {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i]['courseRating18'] = ratings[i]['course_rating_18'];
        ratings[i]['bogeyRating18'] = ratings[i]['bogey_rating_18'];
        ratings[i]['slopeRating18'] = ratings[i]['slope_rating_18'];
        ratings[i]['front9'] = ratings[i]['front9'];
        ratings[i]['back9'] = ratings[i]['back_9'];
    }
    return ratings;
}

export { addCourse };
