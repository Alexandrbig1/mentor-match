import express from 'express';
import { authenticate, isEmptyBody } from "../middleware/index.js";
import validateBody  from "../decorators/validateBody.js";
import authController from "../controllers/auth.controller.js";
import {
  userSignInSchema,
  userSignUpSchema,
} from "../schemas/auth-schema.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userSignUpSchema),
  authController.signUp
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userSignInSchema),
  authController.signIn
);

authRouter.post("/logout", authenticate, authController.logOut);

// refresh using cookie
authRouter.post("/refresh", authController.refresh);

export default authRouter;