//routes/jobs.js
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// Route to create a new job
router.post("/create", jobController.createJob);

// Route to update an existing job
router.put("/update/:id", jobController.updateJob);

// Route to delete a job
router.delete("/delete/:id", jobController.deleteJob);

// Route to get a single job by ID
router.get("/:id", jobController.getJobById);

// Route to get all jobs (with optional filtering, pagination)
router.get("/", jobController.getAllJobs);

module.exports = router;
