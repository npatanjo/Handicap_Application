/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
import { addCourse } from '../controllers/courses';

const router = express.Router();

router.post('/post', addCourse);

export = router;
