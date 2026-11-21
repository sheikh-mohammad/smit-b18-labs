import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  legacyHeaders: false,
  standardHeaders: "draft-8",
  message: {},
});

app.use(limiter);

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  res.status(200).json({
    message: "Server is running...",
    data: null,
    status: true,
  });
});

app.get("/get-users", (request, response) => {
  response.status(200).json({
    message: "Fetched Users",
    status: true,
    data: [{}, {}],
  });
});

app.post("/create-user", (request, response) => {
  response.status(201).json({
    message: "User created",
    status: true,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
