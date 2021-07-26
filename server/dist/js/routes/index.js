"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("../models/user"));
var router = express_1.Router();
// TODO: Update error handling!!!
router.get("/server", function (req, res) {
    res.send('this is your server');
});
router.get("/user/:id", function (req, res) {
    user_1.default.findById(req.params.id, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});
// This can be one dynamic route for updating all "recent" music updates
router.post("/user/:id/add-recent-album/:albumId", function (req, res) {
    user_1.default.findByIdAndUpdate(req.params.id, { $push: { "recent_album": req.params.albumId } }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
// TODO: Create "remove recent" route ofter testing update route
router.post("/register", function (req, res, next) {
    var newUser = new user_1.default({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        recent_album: req.body.recent_album,
        recent_artist: req.body.recent_artist,
        recent_song: req.body.recent_song,
    });
    newUser.save(function (err, newUser) {
        if (err) {
            return next(err);
        }
        res.status(201).json("User Added");
    });
});
exports.default = router;
