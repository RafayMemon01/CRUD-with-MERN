import express from "express";
import cors from "cors";
import records from "./routes/records.js";

const app = express();

const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());
app.use("/records", records);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
