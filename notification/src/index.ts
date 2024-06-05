import { app } from "./app";
import dotenv from "dotenv";
import { natsWrapper } from "./nats-wrapper";
dotenv.config();

const start = async () => {
  try {

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

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`listening port:${port}`);
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start();
