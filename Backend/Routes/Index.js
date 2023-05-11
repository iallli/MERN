const express = require("express");
const authController = require("../Controller/AuthController");
const blogController = require("../Controller/BlogController");
const commentController = require("../Controller/CommentController");
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

// blog

// create
router.post("/blog", auth, blogController.create);

// get all
router.get("/blog/all", auth, blogController.getAll);

// get blog by id
router.get("/blog/:id", auth, blogController.getById);

// update
router.put("/blog", auth, blogController.update);

// delete
router.delete("/blog/:id", auth, blogController.delete);

// comment
// create
router.post("/comment", auth, commentController.create);

// get
router.get("/comment/:id", auth, commentController.getById);

module.exports = router;
