const express = require("express");
const router = express.Router();
//importin the sub routers
const signinRouter = require("./signin");
const signupRouter = require("./signup");
//routing /signin and /signup to different routes
router.use("/signin", signinRouter);
router.use("/signup", signupRouter);
//exporting the router
module.exports = router;
