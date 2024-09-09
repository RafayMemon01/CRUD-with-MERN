import express from 'express';
import { Blog } from '../models/blog.js';

const router = express.Router();

// Route to get all blog posts
router.get('/feed', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
    console.log("feeds sended")
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts", error });
  }
});

router.post('/add-post', async (req, res) => {
  try {
    
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts", error });
  }
})

export default router;
