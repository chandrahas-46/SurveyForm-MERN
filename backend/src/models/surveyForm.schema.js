// models/Survey.js

import mongoose from "mongoose";

export const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  address: String,
  message: String,
});

// const Survey = mongoose.model('Survey', surveySchema);

// module.exports = Survey;
