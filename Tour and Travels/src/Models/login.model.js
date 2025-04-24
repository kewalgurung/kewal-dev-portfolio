// src/models/login.model.js

const mongoose = require("mongoose");

// Login Schema
const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true }
});

// Create the Login model
const LoginCollection = mongoose.model("logincollections", loginSchema);

module.exports = LoginCollection;
