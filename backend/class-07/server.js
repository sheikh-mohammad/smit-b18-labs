import mongoose from "mongoose";
import express, { response } from "express";
import cors from "cors";
import { setServers } from "node:dns/promises";
import StdModel from "./models/studentSchema.js";

const PORT = 5000;
const URI = "mongodb+srv://admin:admin@batch18.nbfkdhi.mongodb.net/";

const app = express();

app.use(express.json());
app.use(cors());

setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(URI)
  .then((response) => console.log("MongoDB Connected!"))
  .catch((error) => console.log("Error in Connection", error));

app.get("/", (request, response) => {
  response.send("Batch 18 Server....");
});

app.post("/create-std", async (request, response) => {
  const userObj = request.body;
  await StdModel.create(userObj);
  response.send({
    message: "User Created Successfully",
  });
});

app.get("/get-all-stds", async (request, response) => {
  const usersData = await StdModel.find();
  response.send({
    message: "All Users Get Successfully",
    content: usersData,
  });
});

app.put("/edit-std", async (request, response) => {
  const { _id: userId, ...data } = request.body;
  await StdModel.findByIdAndUpdate(userId, data);
  response.send({
    message: "User Updated Sucessfully",
  });
});

// app.get("/single-user", async (request, response) => {
//   const { _id: userId } = request.body;
//   const filterId = {
//     _id: userId,
//   };
//   const filter = {
//     ...request.body,
//   };
//   // const userData = await StdModel.findById(userId);
//   // const userData = await StdModel.findOne(request.body);
//   // const userData = await StdModel.findOne(filterId);
//   // const userData = await StdModel.findOne(filter);
//   response.send({
//     message: "User Get Successfully",
//     content: userData,
//   });
// });

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
