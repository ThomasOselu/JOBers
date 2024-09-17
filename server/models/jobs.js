const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number
    },
    required_skills: [
        {
            type: String
        }
    ],
    created_at: {
        type: Date,
        default: Date.now
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Employer who posted the job
        required: true
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
