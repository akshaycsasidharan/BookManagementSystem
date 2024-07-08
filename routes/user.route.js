import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.js"; 

const router = express.Router();


router.post("/register", registerUser);

router.post("/login",verifyToken, loginUser);

export default router;
