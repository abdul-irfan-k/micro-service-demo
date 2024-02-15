import express from "express";
import { paymentCompletedPublisher } from "../../events/publisher/payment-completed-publisher";
import { natsWrapper } from "../../../../user/src/nats-wrapper";
const router = express.Router();

router.get("/payment-completed", (req, res) => {
  try {
    console.log("payment complete route");
    new paymentCompletedPublisher(natsWrapper.client).publish({
      productId: "pr122",
      totalPrice: 560,
    });
  } catch (error) {
    console.log("error", error);
  }
});

export default router;