const express = require("express");
const router = express.Router();
//importing zod
const zod = require("zod");
//importing User model from db.js
const { User } = require("../db");
//importing jwt;
const jwt = require("jsonwebtoken");
//importing JWT_SECRET;
const { JWT_SECRET } = require("../config");

//validating signup body in using zod;
const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

//hanling the post request
router.post("/", async (req, res) => {
  //checking whether the input body is correct using zod
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email Already taken / incorrect inputs",
    });
  }

  //checking if its existing user
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/incorrect inputs",
    });
  }

  //creating a new user
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  //seperating the _id from the user
  const userId = user._id;
  //creating the user's token based on their _id
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  //sending the response that the user as been created
  //with the JWT token
  res.json({
    message: "User Created Successfully",
    token: token,
  });
});

//exporting the router
module.exports = router;
