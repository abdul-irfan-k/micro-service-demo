import express from "express";

import userRouter from "./router/user-route";
import { natsWrapper } from "./nats-wrapper";
import { PaymentCompletedListener } from "./events/listeners/payment-completed-listener";

const app = express();

app.use("/", userRouter);

const start = async () => {
  try {
    await natsWrapper.connectToNats(
      process.env.NATS_CLUSTER_ID!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );
    console.log("env", process.env.NATS_CLUSTER_ID);

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

    new PaymentCompletedListener(natsWrapper.client);

    app.listen(8000, () => {
      console.log("listening on port 8000");
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start();
