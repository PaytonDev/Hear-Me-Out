
import { Router } from "express";
import User from "../models/user";

const router: Router = Router()


// TODO: Update error handling!!!


router.get("/user/:id", function(req, res) {
    User.findById(req.params.id, function(err: any, result: any) {
        if (err) {
            res.send(err);
        } res.send(result)
    })
})


// This can be one dynamic route for updating all "recent" music updates
router.post("/user/:id/add-recent-album/:albumId", function(req, res) {
    User.findByIdAndUpdate(req.params.id, {$push: {"recent_album": req.params.albumId}},
    function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})


// TODO: Create "remove recent" route ofter testing update route


router.post("/register", function (req, res, next) {
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        recent_album: req.body.recent_album,
        recent_artist: req.body.recent_artist,
        recent_song: req.body.recent_song,
    })
    newUser.save(function (err: any, newUser) {
        if (err) { return next(err) }
        res.status(201).json("User Added")
    })
})

export default router