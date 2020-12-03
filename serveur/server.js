const express = require("express");
const { connect } = require("mongoose");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();
app.use(express.json());

app.use("/api/patient", require("./routes/patient"));

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err
    ? console.log("Error", err)
    : console.log(`the server is running on port ${port}`)
);
