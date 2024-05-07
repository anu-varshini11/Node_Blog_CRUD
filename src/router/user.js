const express = require("express");
const { getUsers } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();



router.get("/",authMiddleware,getUsers);

module.exports = router;