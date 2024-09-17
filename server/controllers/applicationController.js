const Application = require("../models/applications");

// Apply for a job
const applyForJob = async (req, res) => {
    try {
        const application = new Application({
            ...req.body,
            user_id: req.user.id, // Assuming `req.user` contains the authenticated user
            application_date: new Date()
        });
        await application.save();
        res.status(201).send("Application submitted successfully");
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get current user's applications
const getUserApplications = async (req, res) => {
    try {
        const applications = await Application.find({ user_id: req.user.id });
        res.status(200).send(applications);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update application status (employer functionality)
const updateApplicationStatus = async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!application) {
            return res.status(404).send("Application not found");
        }
        res.status(200).send("Application status updated successfully");
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    applyForJob,
    getUserApplications,
    updateApplicationStatus
};
