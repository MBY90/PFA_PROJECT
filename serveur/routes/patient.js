const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

//a test
router.get("/", (req, res) => res.send("tested"));

//get all patients

router.get("/list/:doctor", (req, res) => {
  const { doctor } = req.params;
  Patient.find({ doctor })
    .then((patients) => res.send(patients))
    .catch((err) => console.log("Error", err));
});

//add new patient

router.post("/newPatient", (req, res) => {
  const { doctor, name, age, CIN, Birth, condition } = req.body;
  const newPatient = new Patient({ doctor, name, age, CIN, Birth, condition });
  newPatient
    .save()
    .then((patients) => res.send(patients))
    .catch((err) => console.log("Error", err));
});

//modify patient

router.put("/:CIN", (req, res) => {
  const { CIN } = req.params;
  const { name, age, Birth, condition } = req.body;
  Patient.findOneAndUpdate({ CIN }, { $set: { name, age, Birth, condition } })
    .then((patients) => res.send(patients))
    .catch((err) => console.log("Error", err));
});

//delete patient

router.delete("/delete/:CIN", (req, res) => {
  const { CIN } = req.params;
  Patient.findOneAndDelete({ CIN })
    .then((patients) => res.send(patients))
    .catch((err) => console.log("Error", err));
});

module.exports = router;
