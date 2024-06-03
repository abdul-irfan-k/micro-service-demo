import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.DB_URL) throw new Error("db url is not provided");
  const dbUrl = process.env.DB_URL + "user";
  await mongoose.connect(dbUrl);
};
