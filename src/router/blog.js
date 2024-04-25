const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createBlogController,
  getBlogs,
  getBlog,
} = require("../controller/blogController");

router.use(authMiddleware);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlogController);

module.exports = router;
