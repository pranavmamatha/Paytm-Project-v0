const express = require("express");
const router = express.Router();
//importing zod
const zod = require("zod");
//importing User model from db.js
const { User } = require("../db");
//importing jwt
const jwt = require("jsonwebtoken");
//importin jwt_secret_key
const { JWT_SECRET } = require("../config");
//validation rules for signin body using zod
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
router.post("/", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "incorrect inputs",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    return res.status(200).json({
      message: "Logged in successfully",
      token: token,
    });
  } else {
    return res.status(401).json({
      message: "invalid credentials / user does not exist",
    });
  }
});

module.exports = router;
