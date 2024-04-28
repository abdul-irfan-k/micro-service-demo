import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.DB_URL) return console.log("db url is not provided");
  await mongoose.connect(process.env.DB_URL + "/user");
};
