const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

//creating a middleware called authMiddleware
const authMiddleware = (req, res, next) => {
  //getting the Authroization from the header
  const authHeader = req.headers.Authorization;
  //check if there is any Authorization
  // if it is there then check whether it starts with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({});
  }
  //splitting the token from bearer
  const token = authHeader.split(" ")[1];
  //verifying with jwt
  //if correct asign it to req.userID then call next()
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    //when next is called its an indication to produce next else it will be returned
    next();
  } catch (error) {
    //if any error return empty json
    return res.status(403).json({});
  }
};

//exporting the module
module.exports = {
  authMiddleware,
};
