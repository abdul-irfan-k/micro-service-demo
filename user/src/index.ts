import { connectDB } from "./config/db";
import { natsWrapper } from "./nats-wrapper";
import dotenv from "dotenv";
import { app } from "./app";
import { userCreatedListener } from "@events/listeners/user/user-created";
dotenv.config();

const start = async () => {
  try {
    await connectDB();

    await natsWrapper.connectToNats(
      process.env.NATS_CLUSTER_ID!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );
    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!", process.env.NATS_CLIENT_ID!);
      process.exit();
    });

    process.on("SIGINT", () => {
      console.log("sigint");
      natsWrapper.client.close();
    });
    process.on("SIGTERM", () => {
      console.log("sigterm");
      natsWrapper.client.close();
    });

    new userCreatedListener(natsWrapper.client).listen();
    
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`listening  port:${port}`);
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start();
