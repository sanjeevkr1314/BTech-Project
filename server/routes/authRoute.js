import express from "express";
import {
  registerController,
  loginController,
  userStatusController,
  getAllUsersController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn, isApproved } from "../middlewares/authMiddlewares.js";

//router object
const router = express.Router();

//routing
router.post("/register", registerController);
router.post("/login", loginController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// users
router.get("/all-users", requireSignIn, isAdmin, getAllUsersController); 

// user status update
router.put(
  "/user-status/:userId",
  requireSignIn,
  isAdmin,
  userStatusController
);

export default router;
