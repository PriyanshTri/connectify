import { Router } from "express";
import { ifUserNameExists, registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);

export default router;