import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const URI = "mongodb+srv://admin:admin@batch18.nbfkdhi.mongodb.net/";
const PORT = 5001;

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log(`Error in mongodb connection: ${error}`);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "server is running...",
    body: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
