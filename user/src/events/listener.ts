import { Message, Stan } from "node-nats-streaming";
enum Subjects {
  TicketCreated = "ticket:created",
  OrderUpdated = "order:updated",
}

interface Event {
  subject: Subjects;
  data: any;
}
export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  abstract onMessage(data: T["data"], msg: Message): void;
  private client: Stan;
  protected ackWait = 5 * 1000;
  constructor(client: Stan) {
    this.client = client;
  }
  subscriptionOptions() {
    // How our client is going to behave
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable() // send the event to those who can
      .setManualAckMode(true) // sending ack when the event processed - mentioned earlier in this story
      .setAckWait(this.ackWait) // how long to wait for ack
      .setDurableName(this.queueGroupName); // what queue group this listener is, and define him as durable! as mentioned earlier
  }
  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );
    subscription.on("message", (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);
      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }
  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }
}
