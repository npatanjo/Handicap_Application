"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var logging_1 = require("../config/logging");
var RatingsSchema = new mongoose_2.Schema({
    color: { type: String },
    gender: { type: String },
    par: { type: String },
    courseRating18: { type: String },
    bogeyRating18: { type: String },
    slopeRating18: { type: String },
    front9: { type: String },
    back9: { type: String }
});
var CourseSchema = new mongoose_2.Schema({
    name: { type: String, required: true, unique: true },
    ratings: [RatingsSchema]
});
CourseSchema.post('save', function () {
    logging_1["default"].info('Mongo', 'Checkout the new course: ', this);
});
exports["default"] = mongoose_1["default"].model('Course', CourseSchema);
