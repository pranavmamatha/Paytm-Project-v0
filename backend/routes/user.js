const express = require("express");
const router = express.Router();
const signinRouter = require("./signin");
const signupRouter = require("./signup");

router.use("/signin", signinRouter);
router.use("/signup", signupRouter);

module.exports = router;
