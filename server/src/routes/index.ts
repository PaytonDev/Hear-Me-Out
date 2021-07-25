import { Router } from "express";
import { getUser, addUser } from "../contollers/users";

const router: Router = Router()

router.get("/user/:id", getUser)

router.post("/register", addUser)

export default router