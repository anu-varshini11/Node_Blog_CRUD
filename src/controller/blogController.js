const Blog = require("../models/blogModel");

const getBlogs = async (req, res) => {
  try {
    const id = req.user.id;
    console.log(id);
    const blogs = await Blog.find({ user_id: id });
    if (!blogs) throw new Error("Error fetching blogs");
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json("Interanl Server Error");
  }
};

const getBlog = async (req, res) => {
  try {
    const user_id = req.user.id;
    if (!user_id) throw new Error("User id not found");
    const id = req.params.id;
    if (!id) throw new Error("Blog id not found");
    console.log("id: " + id);
    const blog = await Blog.findOne({ _id: id, user_id: user_id });
    if (!blog) throw new Error("Blog not found");
    res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const createBlogController = async (req, res) => {
  try {
    const id = req.user.id;
    console.log(id);
    const { title, description } = req.body;
    const newBlog = new Blog({ user_id: id, title, description });
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { getBlogs, getBlog, createBlogController };
