import { Event, Listener, Subject } from "@micro-project/micro-service-events";
import { Message } from "node-nats-streaming";

export class PaymentCompletedListener extends Listener<Event.paymentComletedEvent> {
  subject: Subject.paymentComleted = Subject.paymentComleted;
  queueGroupName: string = "user-service";

   onMessage(
    data: { productId: string; totalPrice: number },
    message: Message
  ): void {
    console.log("payment completed", data.productId, data.totalPrice);
    message.ack()
  }
}
