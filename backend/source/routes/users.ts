/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
import { createUser, getAllUsers, authenticateUser, deleteUser, getUsersByName, updatePassword } from '../controllers/users';

const router = express.Router();

router.post('/add', createUser);
router.get('/get/all', getAllUsers);
router.get('/get/by/username/:u', getUsersByName);
router.put('/change/password/:u/:p', updatePassword);
router.delete('/delete/user/:u', deleteUser);

// for authentication.
router.get('/login', authenticateUser);

export = router;
