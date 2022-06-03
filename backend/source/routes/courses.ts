/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
import { addCourse, getAllCourses, getCourseByName } from '../controllers/courses';

const router = express.Router();

router.post('/post', addCourse);
router.get('/get/all', getAllCourses);
router.get('/get/by/coursename/:n', getCourseByName);

export = router;
