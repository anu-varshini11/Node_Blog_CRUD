const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  logoutController,
  refetchController,
} = require("../controller/authController");

router.get("/", async (req, res) => {
  res.status(200).json({ Message: "Router Working" });
});

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/logout", logoutController);

router.get("/refetch", refetchController);

module.exports = router;
