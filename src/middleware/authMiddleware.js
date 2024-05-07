const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
          res.status(401).json({ Error: "UnAuthorised User" });
        }
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
      });
    }
  } catch (err) {
    res.status(500).json("Internal Server Error")
  }
};

module.exports = authMiddleware;
