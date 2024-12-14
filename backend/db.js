//importing mongoose
const mongoose = require("mongoose");
//connecting to mongodb
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.uutzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
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

//mongoose Schema for `account` table
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

//create model from the userSchema
const User = mongoose.model("User", userSchema);
//create model from the accountSchema
const Account = mongoose.model("Account", userSchema);

//exporing the model
module.exports = {
  User,
  Account,
};
