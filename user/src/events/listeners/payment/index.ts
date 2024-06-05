import { Event, Listener, Subject } from "micro-service-event";
import { Message } from "node-nats-streaming";

export class PaymentCompletedListener extends Listener<Subject.paymentComleted> {
  subject: Subject.paymentComleted = Subject.paymentComleted;
  queueGroupName: string = "user-service";

  onMessage(data:any, message: Message): void {
    console.log("payment completed", data.productId, data.totalPrice);
    message.ack();
  }
}
