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

const getAllCourses = (req: Request, res: Response, next: NextFunction) => {
    console.log('lsdkfjlsdkfj');
    Course.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                courses: results,
                count: results.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getCourseByName = (req: Request, res: Response, next: NextFunction) => {
    Course.findOne({ name: req.params.n })
        .exec()
        .then((results: any) => {
            return res.status(200).json({
                course: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const fuzzySearch = (req: Request, res: Response, next: NextFunction) => {
    const regex = new RegExp(req.params.n, 'i'); // i for case insensitive
    Course.find({ name: { $regex: regex } })
        .exec()
        .then((results: any) => {
            return res.status(200).json({
                course: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const fuzzySearchWithFilter = (req: Request, res: Response, next: NextFunction) => {
    let { search, filters } = req.body;

    const regex = new RegExp(search, 'i'); // i for case insensitive
    Course.find({ name: { $regex: regex }, ratings: filters })
        .exec()
        .then((results: any) => {
            return res.status(200).json({
                course: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export { addCourse, getAllCourses, getCourseByName, fuzzySearch, fuzzySearchWithFilter };
