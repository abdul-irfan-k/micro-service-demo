import { app } from "./app";
import dotenv from 'dotenv'; 
import { connectDB } from "./config/db";
dotenv.config()

const start = async () => {
    try {
      const dbConnection = await connectDB()
      const port = process.env.PORT || 8000
      app.listen(port, () => {
        console.log(`listening on port:${port}`);
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  start();
  