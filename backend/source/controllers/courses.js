"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
exports.fuzzySearchWithFilter = exports.fuzzySearch = exports.getCourseByName = exports.getAllCourses = exports.addCourse = void 0;
var courses_1 = require("../models/courses");
var addCourse = function (req, res, next) {
    var name = req.body.course_name;
    var ratings = addCourseHelper(req.body.course_ratings);
    var course = new courses_1["default"]({
        name: name,
        ratings: ratings
    });
    return course
        .save()
        .then(function (result) {
        return res.status(201).json({
            course: result
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.addCourse = addCourse;
/**
 *
 * @param ratings the ratings from the inputed json. This rating is formatted for python
 * @returns the new formatted rating. this rating is formatted for JS/TS
 */
function addCourseHelper(ratings) {
    for (var i = 0; i < ratings.length; i++) {
        ratings[i]['courseRating18'] = ratings[i]['course_rating_18'];
        ratings[i]['bogeyRating18'] = ratings[i]['bogey_rating_18'];
        ratings[i]['slopeRating18'] = ratings[i]['slope_rating_18'];
        ratings[i]['front9'] = ratings[i]['front9'];
        ratings[i]['back9'] = ratings[i]['back_9'];
    }
    return ratings;
}
var getAllCourses = function (req, res, next) {
    console.log('lsdkfjlsdkfj');
    courses_1["default"].find()
        .exec()
        .then(function (results) {
        return res.status(200).json({
            courses: results,
            count: results.length
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.getAllCourses = getAllCourses;
var getCourseByName = function (req, res, next) {
    courses_1["default"].findOne({ name: req.params.n })
        .exec()
        .then(function (results) {
        return res.status(200).json({
            course: results
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.getCourseByName = getCourseByName;
var fuzzySearch = function (req, res, next) {
    var regex = new RegExp(req.params.n, 'i'); // i for case insensitive
    courses_1["default"].find({ name: { $regex: regex } })
        .exec()
        .then(function (results) {
        return res.status(200).json({
            course: results
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.fuzzySearch = fuzzySearch;
var fuzzySearchWithFilter = function (req, res, next) {
    var _a = req.body, search = _a.search, filters = _a.filters;
    var regex = new RegExp(search, 'i'); // i for case insensitive
    courses_1["default"].find({ name: { $regex: regex }, ratings: filters })
        .exec()
        .then(function (results) {
        return res.status(200).json({
            course: results
        });
    })["catch"](function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.fuzzySearchWithFilter = fuzzySearchWithFilter;
