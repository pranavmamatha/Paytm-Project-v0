const express = require("express");
const router = express.Router();
//importin the sub routers
const signinRouter = require("./signin");
const signupRouter = require("./signup");
const updateRouter = require("./update");
const searchRouter = require("./search");
//routing /signin and /signup to different routes
router.use("/signin", signinRouter);
router.use("/signup", signupRouter);
router.use("/", updateRouter);
router.use("/bulk", searchRouter);
//exporting the router
module.exports = router;
