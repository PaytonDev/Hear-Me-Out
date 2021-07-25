"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var SALT_WORK_FACTOR = 10;
var userSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    recent_album: {
        type: Array,
        required: false,
    },
    recent_song: {
        type: Array,
        required: false,
    },
    recent_artist: {
        type: Array,
        required: false,
    },
});
userSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt_1.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err)
            return next(err);
        bcrypt_1.default.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            user.password = hash;
        });
    });
});
userSchema.methods.comparePassword = function (userPassword, cb) {
    bcrypt_1.default.compare(userPassword, this.password, function (err, isMatch) {
        if (err)
            return cb(err, null);
        cb(null, isMatch);
    });
};
exports.default = mongoose_1.model("User", userSchema);
