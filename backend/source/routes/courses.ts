/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
import { addCourse, fuzzySearch, fuzzySearchWithFilter, getAllCourses, getCourseByName } from '../controllers/courses';

const router = express.Router();

router.post('/post', addCourse);
router.get('/get/all', getAllCourses);
router.get('/get/by/coursename/:n', getCourseByName);
router.get('/find/by/fuzzy/:n', fuzzySearch);
router.post('/find/by/fuzzy/with/filter', fuzzySearchWithFilter);

export = router;
