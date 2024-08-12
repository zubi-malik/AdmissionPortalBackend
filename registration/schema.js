const { Schema, model } = require("mongoose");

const registerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cnic: {
      type: String,
      required: true,
      unique: true,
    },
    fatherCNIC: {
      type: Number,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    laptop: {
      type: String,
      required: true,
    },
    selectCourse: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Register = model("register", registerSchema);
module.exports = Register;
