import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
import { setServers } from "node:dns/promises";
import nodemailer from "nodemailer";
import UserModel from "./models/user.js";
import OtpModel from ".models/otp.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log("Error in MongoDB Connection", error);
  });

setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log("Home Endpoint (/) is running");
  response.json({
    message: "Server is successfully running...",
    body: null,
    status: true,
  });
});

app.post("/api/signup", async (request, response) => {
  console.log("Signup Endpoint (/api/signup) is running");

  try {
    const { fullName, email, password } = request.body;

    if (!fullName || !email || !password) {
      return response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
        token: null,
      });
    }

    const userData = await UserModel.findOne({
      email,
    });

    if (userData) {
      return response.json({
        message: "User Already Exists",
        body: null,
        status: false,
        token: null,
      });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const userObj = {
      fullName,
      email,
      password: hashPass,
    };

    const saveUser = UserModel.create(userObj);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER_EMAIL,
        pass: process.env.SMTP_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER_EMAIL,
      to: saveUser.email,
      subject: "OTP Verification",
      html: "",
    };

    transporter.sendMail(mailOptions, (error, success) => {
      if (error) {
        return response.json({
          message: error || "Something went wrong",
          body: null,
          status: false,
          token: null,
        });
      } else {
        console.log("Otp Email Successfully sended");
      }
    });
  } catch (error) {
    return response.json({
      message: error.message || "Something went wrong",
      body: null,
      status: false,
      token: null,
    });
  }
});

app.post("/api/login", async (request, response) => {
  console.log("Login Endpoint (/api/login) is running");

  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
        token: null,
      });
    }
  } catch (error) {
    return response.json({
      message: error.message || "Something went wrong",
      body: null,
      status: false,
      token: null,
    });
  }
});

app.post("/api/verify-otp", async (request, response) => {});

app.post("/api/resend-otp", async (request, response) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
