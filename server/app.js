const express = require("express");
const path = require("path");
const hbs = require("hbs");
const authRoutes = require("./routes/auth");  // Updated route imports
const jobRoutes = require("./routes/jobs");
const userRoutes = require("./routes/users");
require("./db/conn");  // MongoDB connection

const app = express();
const port = process.env.PORT || 5000;

// Paths for static files and templates
const static_h1 = path.join(__dirname, "../public");
const static_h2 = path.join(__dirname, "../templates/views");
const static_h3 = path.join(__dirname, "../templates/partials");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_h1));

// View engine setup
app.set("view engine", "hbs");
app.set("views", static_h2);
hbs.registerPartials(static_h3);

// Routes
app.use("/auth", authRoutes);  // Handle authentication routes
app.use("/jobs", jobRoutes);   // Handle job routes
app.use("/users", userRoutes); // Handle user routes

app.get("/", (req, res) => {
    res.render("login");  // Default page on root
});

// Error handling
app.use((req, res, next) => {
    res.status(404).render("404", { error: "Page not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});
