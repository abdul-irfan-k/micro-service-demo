import { app } from "./app";
import { PaymentCompletedListener } from "./events/listeners/payment-completed-listener";
import { natsWrapper } from "./nats-wrapper";
import dotenv from 'dotenv'; 
dotenv.config()

const start = async () => {
    try {
      console.log("env", process.env.NATS_CLUSTER_ID);
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
  
      new PaymentCompletedListener(natsWrapper.client).listen();
      
      const port = process.env.PORT || 8000
      app.listen(port, () => {
        console.log(`listening on port:${port}`);
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  start();
  