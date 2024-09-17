const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

// Route for applying a job
router.post("/apply", applicationController.applyForJob);

// Route to get user's applications
router.get("/my-applications", applicationController.getUserApplications);

// Route to update the status of an application (for employers)
router.put("/update/:id", applicationController.updateApplicationStatus);

module.exports = router;
