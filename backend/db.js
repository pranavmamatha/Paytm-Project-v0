//importing mongoose
const mongoose = require("mongoose");

//mongoose schema for `user` table
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLenght: 30,
  },
});

//create model from the schema
const User = mongoose.model("User", userSchema);

//exporing the model
module.exports = {
  User,
};
