import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    maxLength: [16, "Max length of Password is 16 chars"],
    minLength: [8, "Min length of Password is 8 chars"],
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
