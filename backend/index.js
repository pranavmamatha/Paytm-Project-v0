const express = require("express");
//importing cors
const cors = require("cors");
const app = express();
//since frontend and backend will be hosted in different routes, cors middleware shouuld be used..
app.use(cors()); //CORS=[CROSS ORIGIN RESOURSE SHARING]
//this middleware used instead of body parser, since we are using latest version of expess
app.use(express.json());
//importing router;
const rootRouter = require("./routes/index");

//routing all the request from /api/v1 to router
app.use("/api/v1", rootRouter);
