const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to get the current user's profile
router.get("/profile", userController.getProfile);

// Route to update the user's profile
router.put("/profile", userController.updateProfile);

// Route to get all users (admin access)
router.get("/", userController.getAllUsers);

module.exports = router;
