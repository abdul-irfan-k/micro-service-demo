import { Listener, Subject } from "micro-service-event";
import { EventDataMap } from "micro-service-event/src/events";
import { Message } from "node-nats-streaming";

export class userCreatedListener extends Listener<Subject.userCreated> {
  subject: Subject.userCreated = Subject.userCreated;
  queueGroupName: string = "user-service";
  onMessage(data: EventDataMap, message: Message): void {
    console.log("user account created", data);
    message.ack()
  }
}
