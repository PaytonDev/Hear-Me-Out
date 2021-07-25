"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../contollers/users");
var router = express_1.Router();
router.get("/user/:id", users_1.getUser);
router.post("/register", users_1.addUser);
exports.default = router;
