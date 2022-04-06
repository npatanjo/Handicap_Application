import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

router.get('/get/books', controller.getAllUsers);

export = router;
