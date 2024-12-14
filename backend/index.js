const express = require("express");
const app = express();
//importing router;
const rootRouter = require("./routes/index");

//routing all the request from /api/v1 to router
app.use("/api/v1", rootRouter);
