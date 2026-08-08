import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { setServers } from "node:dns/promises";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import UserModel from "./models/user.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log(`Error in MongoDB Connection: ${error}`);
  });

setServers(["8.8.8.8", "1.1.1.1"]);

app.get("/", (request, response) => {
  console.log("/ Home Route is running...");

  response.json({
    message: "Server is successfully running...",
    body: null,
    status: true,
  });
});

app.post("/signup", async (request, response) => {
  console.log("/signup Signup Route is running...");

  try {
    const { fullName, email, password } = request.body;

    if (!fullName || !email || !password) {
      response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
      });
      return;
    }

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      response.json({
        message: "User Already Exists",
        body: null,
        status: false,
      });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userObj = {
      ...request.body,
      password: hashPassword,
    };

    await UserModel.create(userObj);

    response.json({
      message: "User Created Successfully",
      body: null,
      status: true,
    });
  } catch (error) {
    response.json({
      message: error.message,
      body: null,
      status: false,
    });
  }
});

app.post("/login", async (request, response) => {
  console.log("/login Route is running...");

  try {
    const { email, password } = request.body;

    if (!email || !password) {
      response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
      });
      return;
    }

    const userData = await UserModel.findOne({ email });

    if (!userData) {
      response.json({
        message: "Invalid email or password",
        body: null,
        status: false,
      });
      return;
    }

    const isCorrectPass = await bcrypt.compare(password, userData.password);
  } catch (error) {
    response.json({
      message: error.message,
      body: null,
      status: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
