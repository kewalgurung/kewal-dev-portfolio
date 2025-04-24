// routes/blogRoutes.js
const express = require('express');
const { BlogCollection } = require('../models');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Initialize the router
const router = express.Router();

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Blog routes
router.get("/", async (req, res) => {
    try {
        const blogs = await BlogCollection.find();
        res.render("index", { blogs });
    } catch (err) {
        console.error("Error fetching blogs:", err.message);
        res.status(500).send("Server error");
    }
});

router.get("/create-blog", (req, res) => {
    res.render("create-blog");
});

router.post('/upload-blog', upload.single('profileImage'), async (req, res) => {
    const { title, content } = req.body;
    const file = req.file;

    try {
        const newBlog = new BlogCollection({
            title,
            content,
            image: file ? file.filename : null
        });
        await newBlog.save();
        res.redirect('/homepage');
    } catch (err) {
        console.error("Error saving blog post:", err.message);
        res.status(500).send("Error saving the blog post.");
    }
});

module.exports = router;
