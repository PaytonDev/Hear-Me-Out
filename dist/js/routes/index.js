"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
var router = express_1.Router();
var credentials = {
    clientId: "76007946b07a474487db86cb749ba027",
    clientSecret: "904fb7d65c2a4a24a6d4925a1714e34b",
    redirectUri: 'http://localhost:3000/'
};
// TODO: Update error handling!!!
router.get('/', function (req, res) {
    console.log('Luke, this is your server...');
});
router.post("/login/spotify", function (req, res) {
    var spotifyApi = new spotify_web_api_node_1.default(credentials);
    var code = req.body.code;
    spotifyApi.authorizationCodeGrant(code).then(function (data) {
        res.json({
            token: data.body.access_token,
        });
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});
// router.get("/user/:id", function(req, res) {
//     User.findById(req.params.id, function(err: any, result: any) {
//         if (err) {
//             res.send(err);
//         } res.send(result)
//     })
// })
// // This can be one dynamic route for updating all "recent" music updates
// router.post("/user/:id/add-recent-album/:albumId", function(req, res) {
//     User.findByIdAndUpdate(req.params.id, {$push: {"recent_album": req.params.albumId}},
//     function(err, result) {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
// // TODO: Create "remove recent" route ofter testing update route
// router.post("/register", function (req, res, next) {
//     let newUser = new User({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         username: req.body.username,
//         password: req.body.password,
//         recent_album: req.body.recent_album,
//         recent_artist: req.body.recent_artist,
//         recent_song: req.body.recent_song,
//     })
//     newUser.save(function (err: any, newUser) {
//         if (err) { return next(err) }
//         res.status(201).json("User Added")
//     })
// })
exports.default = router;
