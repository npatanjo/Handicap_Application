/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
import { createUser, getAllUsers, authenticateUser, putUser, deleteUser } from '../controllers/users';

const router = express.Router();

router.post('/add', createUser);
router.get('/get', getAllUsers);
router.put('/change/password', putUser);
router.delete('/delete/:u', deleteUser);

// for authentication.
router.get('/login', authenticateUser);

export = router;
