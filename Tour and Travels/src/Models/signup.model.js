// src/models/signup.model.js

const mongoose = require("mongoose");

// Signup Schema
const signupCollectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }
});

// Create the Signup model
const SignupCollection = mongoose.model("signupcollections", signupCollectionSchema);

module.exports = SignupCollection;
