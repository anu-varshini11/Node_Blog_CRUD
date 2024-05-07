const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createBlogController,
  getBlogs,
  getBlog,
  updateBlogController,
  deleteBlogController,
} = require("../controller/blogController");

router.use(authMiddleware);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlogController);

router.put("/:id", updateBlogController);

router.delete("/:id", deleteBlogController);

module.exports = router;