import express from 'express';
import { createUser } from '../controllers/users';
import { getAllUsers } from '../controllers/users';
import { authenticateUser } from '../controllers/users';

const router = express.Router();

router.post('/add/user', createUser);
router.get('/get/users', getAllUsers);

// for authentication. 
router.get('/login', authenticateUser);

export = router;
