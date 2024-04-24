const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username, email }] });
    if (existingUser) throw new Error("User with username or email Exists");
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const savedUser = newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) throw new Error("User Not found");
    const matchedData = await bcrypt.compareSync(password, user.password);
    if (!matchedData) throw new Error("UnAuthorised User");
    const { password: _, ...data } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie("token", token).status(200).json(data);
    console.log(req.headers);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const logoutController = async (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: true, secure: true })
      .status(200)
      .json({ Message: "Logged Out" });
  } catch (err) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

const refetchController = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
        console.error(err);
      }
      try {
        const id = data.id;
        console.log(id);
        const user = await User.findById(id);
        if (!user) throw new Error("User Not Found");
        res.status(200).json(user);
      } catch (err) {
        console.error(err);
        res.status(401).json({ Error: "UnAuthorised User" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

module.exports = {
  registerController,
  loginController,
  logoutController,
  refetchController,
};
