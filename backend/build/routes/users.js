"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.post('/add', users_1.createUser);
router.get('/get/all', users_1.getAllUsers);
router.get('/get/by/username/:u', users_1.getUsersByName);
router.put('/change/password/:u/:p', users_1.updatePassword);
router.delete('/delete/user/:u', users_1.deleteUser);
// for authentication.
router.get('/login', users_1.authenticateUser);
module.exports = router;
