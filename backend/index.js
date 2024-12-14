const express = require("express");
const app = express();
//importing router;
const { router } = require("./routes/index");

//routing all the request from /api/v1 to router
app.use("/api/v1", router);
