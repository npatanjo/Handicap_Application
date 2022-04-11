import express from 'express';
import { createUser } from '../controllers/users';
import { getAllUsers } from '../controllers/users';

const router = express.Router();

router.post('/add/user', createUser);
router.get('/get/users', getAllUsers);

export = router;
