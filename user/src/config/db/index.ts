import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.DB_URL) return console.log("db not connected ");
  await mongoose.connect(process.env.DB_URL + "/user");
};
