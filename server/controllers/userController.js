const User = require("../models/users");

// Get current user's profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Assuming `req.user` contains the authenticated user
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update current user's profile
const updateProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("Profile updated successfully");
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all users (admin functionality)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getProfile,
    updateProfile,
    getAllUsers
};
