import express from "express";

import userRouter from "./router/user-route";
import { natsConnector } from "./nats-connector";
import { natsWrapper } from "./events/nats-wrapper";

const app = express();

app.use("/", userRouter);
// app.get("/", (req, res) => {
//   return res.status(200).send("user api modified");
// });

(async () => {
  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );
    console.log("env",process.env.NATS_CLUSTER_ID)
    app.listen(8000, () => {
      console.log("listening on port 8000");
    });
  } catch (error) {
    console.log("error ", error);
  }
})();
