"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
var express_1 = require("express");
var courses_1 = require("../controllers/courses");
var router = express_1["default"].Router();
router.post('/post', courses_1.addCourse);
router.get('/get/all', courses_1.getAllCourses);
router.get('/get/by/coursename/:n', courses_1.getCourseByName);
router.get('/find/by/fuzzy/:n', courses_1.fuzzySearch);
router.post('/find/by/fuzzy/with/filter', courses_1.fuzzySearchWithFilter);
module.exports = router;
