import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { setServers } from "node:dns/promises";

const app = express();

app.use(express.json());
app.use(cors());

setServers(["8.8.8.8", "1.1.1.1"]);

const URI = "mongodb+srv://admin:admin@batch18.nbfkdhi.mongodb.net/";

mongoose
  .connect(URI)
  .then((response) => console.log("MongoDB Connected!", response))
  .catch((error) => console.log("Error in Connection", error));

