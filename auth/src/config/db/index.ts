import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer()

export const connectDB = async () => {
  if (!process.env.DB_URL) return console.log("db not connected");
  await mongoose.connect(process.env.DB_URL);
};
