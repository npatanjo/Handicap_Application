"use strict";
/**
 *
 * @author Nate Patnjo
 *
 */
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var logging_1 = require("../config/logging");
/**
 *
 * creates schema for users
 * @param {string} username the username of the user [required]
 * @param {string} password the password of the user [required]
 * @param {string} gender the gender (male or female) of the user [required]
 *
 */
var UserSchema = new mongoose_2.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    token: { type: String, required: true }
}, {
    /**
     * creates a time stamp on the collection
     */
    timestamps: true
});
UserSchema.post('save', function () {
    logging_1["default"].info('Mongo', 'Checkout the new user: ', this);
});
/**
 *
 * @interface IUser this way we can use all the vars
 * @path "../interface/users"
 *
 */
exports["default"] = mongoose_1["default"].model('User', UserSchema);
