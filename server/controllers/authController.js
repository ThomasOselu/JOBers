const Register = require("../models/reg");
const bcrypt = require("bcrypt");

// Handle registration
const registerUser = async (req, res) => {
    try {
        const { password, cpassword, firstname, lastname, email, number, id } = req.body;

        // Check if email is already registered
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email already registered.");
        }

        // Check if passwords match
        if (password === cpassword) {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Save user in the database
            const emp = new Register({ 
                firstname,
                lastname,
                email,
                phone: number,
                id,
                password: hashedPassword, // Store hashed password
                repeat: hashedPassword
            });

            await emp.save();
            res.status(201).render("index");
        } else {
            res.status(400).send("Passwords do not match.");
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

// Handle login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await Register.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            res.status(201).render("index");
        } else {
            res.status(400).send("Invalid login details.");
        }
    } catch (error) {
        res.status(400).send("Invalid login details.");
    }
};

module.exports = {
    registerUser,
    loginUser
};
