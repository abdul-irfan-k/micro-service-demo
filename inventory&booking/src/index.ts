import { app } from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { natsWrapper } from "./nats-wrapper";
import { travellRouteAddedListener } from "@events/listener/travell-route/travell-route-created";
import { travellRouteUpdatedListener } from "@events/listener/travell-route-update";
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
      console.log("NATS connetion closed!");
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

    new travellRouteAddedListener(natsWrapper.client).listen()
    new travellRouteUpdatedListener(natsWrapper.client).listen()
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`listening port:${port}`);
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start(); 