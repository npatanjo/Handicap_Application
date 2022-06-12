/**
 *
 * @author Nate Patnjo
 *
 */

import express from 'express';
<<<<<<< HEAD
import { createUser, getAllUsers, authenticateUser, deleteUser, getUsersByName, updatePassword } from '../controllers/users';
=======
import { createUser, getAllUsers, authenticateUser, putUser, deleteUser } from '../controllers/users';
>>>>>>> fd7cbce3c765e91e03a4c78bae0bec02a59feeef

const router = express.Router();

router.post('/add', createUser);
<<<<<<< HEAD
router.get('/get/all', getAllUsers);
router.get('/get/by/username/:u', getUsersByName);
router.put('/change/password/:u/:p', updatePassword);
router.delete('/delete/user/:u', deleteUser);
=======
router.get('/get', getAllUsers);
router.put('/change/password', putUser);
router.delete('/delete/:u', deleteUser);
>>>>>>> fd7cbce3c765e91e03a4c78bae0bec02a59feeef

// for authentication.
router.get('/login', authenticateUser);

export = router;
