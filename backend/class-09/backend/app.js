import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { setServers } from "node:dns/promises";
import UserModel from "./models/user.js";

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
setServers(["8.8.8.8", "1.1.1.1"]);

app.get("/", (req, res) => {
  res.json({
    message: "server is running...",
    body: null,
    status: true,
  });
});

app.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.json({
      message: "Required fileds are missing",
      body: null,
      status: false,
    });

    return;
  }

  try {
    const filter = {
      email,
    };

    const userExist = await UserModel.findOne(filter);

    if (!userExist) {
      await UserModel.create(req.body);

      res.json({
        message: "User Signuped",
        body: null,
        status: true,
      });

      return;
    }

    res.json({
      message: "User already exists",
      body: null,
      status: false,
    });

    return;
  } catch (error) {
    console.log("Error:", error);

    res.json({
      message: error.message,
      body: null,
      status: false,
    });

    return;
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({
      message: "Required fileds are missing",
      body: null,
      status: false,
    });

    return;
  }

  try {
    const filter = {
      email,
      password,
    };

    const user = await UserModel.findOne(filter);

    if (!user) {
      res.json({
        message: "Invalid email or password",
        body: null,
        status: false,
      });

      return;
    }

    res.json({
      message: "User logined",
      body: user,
      status: true,
    });

    return;
  } catch (error) {
    console.log("Error:", error);

    res.json({
      message: error.message,
      body: null,
      status: false,
    });

    return;
  }
});

// Todo CRUD

// Create Todo
app.post("/todo", async (req, res) => {
  
});

// Read Todo
app.get("/todo", async (req, res) => {});

// Update Todo
app.put("/todo", async (req, res) => {});

// Delete Todo
app.delete("/todo", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
