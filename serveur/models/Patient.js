const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  doctor: { type: String },
  name: { type: String, required: true },
  age: Number,
  CIN: { type: Number, required: true, unique: true },
  Birth: String,
  condition: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});
module.exports = Patient = mongoose.model("patient", PatientSchema);
