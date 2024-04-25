const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({ Error: "UnAuthorised User" });
        }
        req.user = decoded;
        console.log(req.user.id);
        next();
      });
    }
  } catch (err) {
    res.status(500).json("Internal Server Error")
  }
};

module.exports = authMiddleware;
