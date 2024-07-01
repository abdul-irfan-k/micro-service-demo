import mongoose from 'mongoose';
// import { MongoMemoryServer } from "mongodb-memory-server";

// const mongod = new MongoMemoryServer();

export const connectDB = async () => {
  if (!process.env.DB_URL) throw new Error('db url is not provided');
  const dbUrl = process.env.DB_URL + 'auth';
  await mongoose.connect(dbUrl);
};
