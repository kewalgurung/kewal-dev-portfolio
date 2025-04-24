// src/models/blog.model.js

const mongoose = require("mongoose");

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String } // Optional field for image filename
});

// Create the Blog model
const BlogCollection = mongoose.model("blogcollections", blogSchema);

module.exports = BlogCollection;
