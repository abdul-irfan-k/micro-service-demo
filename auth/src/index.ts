import { app } from "./app";
import dotenv from 'dotenv'; 
dotenv.config()

const start = async () => {
    try {
      const port = process.env.PORT || 8000
      app.listen(port, () => {
        console.log(`listening on port:${port}`);
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  start();
  