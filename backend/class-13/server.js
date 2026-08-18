import nodemailer from "nodemailer";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log("Error in MongoDB Connection:", error);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log("Home Route: /");
  response.json({
    message: "Server is running successfully",
    body: null,
    status: true,
  });
});

app.post()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
