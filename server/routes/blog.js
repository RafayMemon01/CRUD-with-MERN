import express from "express";
import { Blog } from "../models/blog.js";

const router = express.Router();

// Route to get all blog posts
router.get("/feed", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
    console.log("feeds sended");
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts", error });
  }
});

router.post("/add-post", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts", error });
  }
});

router.delete("/delete-post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog post", error });
  }
});

router.put("/update-post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error updating blog post", error });
  }
});

export default router;
