import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import blogRoutes from './routes/blog.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const ATLAS_URI = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());


app.use("/blog", blogRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(ATLAS_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
};

startServer();
