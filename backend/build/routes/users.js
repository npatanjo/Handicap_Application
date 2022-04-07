"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const users_2 = require("../controllers/users");
const router = express_1.default.Router();
router.post('/create/user', users_1.createUser);
router.get('/get/users', users_2.getAllUsers);
module.exports = router;
