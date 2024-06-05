import { connectDB } from "./config/db";
import { PaymentCompletedListener } from "./events/listeners/payment";
import { userCreatedListener } from "./events/listeners/user/user-created";
import { natsWrapper } from "./nats-wrapper";
import dotenv from "dotenv";
import { app } from "./app";
dotenv.config();

const start = async () => {
  try {
    await connectDB();

    console.log("client id ",process.env.NATS_CLIENT_ID, process.env.NATS_CLUSTER_ID);
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

    
   const test = new userCreatedListener(natsWrapper.client)
   console.log("test ",test.subject)
    // new PaymentCompletedListener(natsWrapper.client).listen();

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`listening on port:${port}`);
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start();
