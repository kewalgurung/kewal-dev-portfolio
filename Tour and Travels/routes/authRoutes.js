// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const { SignupCollection } = require('../models');  // Import models

const router = express.Router();

// Signup route
router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", async (req, res) => {
    try {
        const { name, password, age, gender } = req.body;

        const user = await SignupCollection.findOne({ name });
        if (user) {
            return res.status(400).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newSignup = new SignupCollection({
            name,
            password: hashedPassword,
            age,
            gender
        });

        await newSignup.save();
        res.redirect('/index');
    } catch (err) {
        console.error("Error during signup:", err.message);
        res.status(500).send("Server error");
    }
});

// Login route
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await SignupCollection.findOne({ name });
        if (!user) {
            return res.status(400).send("Invalid login credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid login credentials");
        }

        res.redirect("/index");
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
