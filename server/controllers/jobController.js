const Job = require('../models/jobs'); // Adjust path if necessary

// Create a new job
const createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an existing job
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(updatedJob);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a job
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single job by ID
const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all jobs with optional filtering and pagination
const getAllJobs = async (req, res) => {
    try {
        const { query } = req; // Add logic to handle query parameters
        const jobs = await Job.find(query); // Implement filtering, sorting, and pagination as needed
        res.status(200).json(jobs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById,
    getAllJobs
};
