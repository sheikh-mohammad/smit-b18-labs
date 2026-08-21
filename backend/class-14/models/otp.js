import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
    },
    expireAt: {
      type: Date,
      default: new Date(Date.now() + 10 * 60 * 1000),
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const OtpModel = mongoose.model("otps", otpSchema);

export default OtpModel;
