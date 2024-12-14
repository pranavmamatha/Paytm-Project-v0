//importing express
const express = require("express");
//Creating a router
const router = express.Router();
//importing sub route called user
const userRouter = require("./user");
//routing /user to userRouter
router.use("/user", userRouter);

//exporting the router
module.exports = router;
