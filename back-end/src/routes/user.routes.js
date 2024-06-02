import { Router } from "express";
import { ifUserNameExists, registerUser, resetPassword } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { verifyAccessToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);
router.route('/forgot-password').post(resetPassword);

export default router;