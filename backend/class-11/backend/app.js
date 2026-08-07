import mongoose from "mongoose";
import cors from "cors";
import express, { response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setServers } from "node:dns/promises";

const PORT = 30001;
const URI = "mongodb+srv://admin:admin@batch18.nbfkdhi.mongodb.net/";

const app = express();

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log("Error in MongoDB Connection: ", error);
  });

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  console.log("/ Home Route Running...");

  response.json({
    message: "Server is running...",
    body: null,
    status: true,
  });
});

app.post("/signup", async (request, response) => {
    
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
