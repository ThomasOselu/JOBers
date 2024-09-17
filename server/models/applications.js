const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    status: {
        type: String,
        enum: ["applied", "interview", "hired", "rejected"],
        default: "applied"
    },
    application_date: {
        type: Date,
        default: Date.now
    },
    resume_link: {
        type: String,
        trim: true
    },
    cover_letter: {
        type: String
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
