"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const logging_1 = __importDefault(require("../config/logging"));
const UserSchema = new mongoose_2.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    token: { type: String, required: true }
}, {
    timestamps: true
});
UserSchema.post('save', function () {
    logging_1.default.info('Mongo', 'Checkout the new user: ', this);
});
exports.default = mongoose_1.default.model('User', UserSchema);
