// src/models/experience.model.js

const mongoose = require("mongoose");

// Experience Schema
const experienceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  story: { type: String, required: true }
});

// Create the Experience model
const ExperienceCollection = mongoose.model("experiencecollections", experienceSchema);

module.exports = ExperienceCollection;
