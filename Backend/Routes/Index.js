const express = require("express");
const authController = require("../Controller/AuthController");
const auth = require("../Middlewares/Auth");

const router = express.Router();

// user

// register
router.post("/register", authController.register);

// login
router.post("/login", authController.login);

// logout
router.post("/logout", auth, authController.logout);

// refresh
router.get("/refresh", authController.refresh);

module.exports = router;
