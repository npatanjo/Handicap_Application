import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

router.post('/create/user', controller.createUser);
router.get('/get/users', controller.getAllUsers);

export = router;
