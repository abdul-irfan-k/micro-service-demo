import { natsWrapper } from "../../user/src/nats-wrapper";
import { app } from "./app";

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

    app.listen(process.env.PORT, () => {
      console.log(`listening on port:${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
  }
};
start();
