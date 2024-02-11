import express from "express";
import { natsConnector } from "../nats-connector";
import { TicketCreatedPublisher } from "../events/ticket-created-event";
import { natsWrapper } from "../events/nats-wrapper";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("/user route");
});

router.post("/ticket-creation", async (req, res) => {
  try {
    console.log("ticket creation route");
    const { ticket } = req.body;
    new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
    });
    return res.send("ticket creation");
  } catch (error) {
    console.log("error ");
  }
});

router.post("/tickets", async (req, res) => {
  console.log("tickets route ");
  return res.send("tickets");
});
export default router;
