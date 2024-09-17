// //models/users.js
// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   // Additional fields
// });

// module.exports = mongoose.model('User', UserSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: [
        {
            type: String
        }
    ],
    role: {
        type: String,
        enum: ["user", "employer"],
        default: "user"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving (if needed)
// userSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 8);
//     }
//     next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
