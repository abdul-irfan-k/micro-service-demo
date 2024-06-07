import { emailNotificationUseCase } from "@lib/use-case";
import { Listener, Subject } from "micro-service-event";
import { EventDataMap } from "micro-service-event/src/events";
import { Message } from "node-nats-streaming";

export class userCreatedListener extends Listener<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = "user:created";
  queueGroupName: string = "user-service";
  async onMessage(data: any, message: Message): Promise<void> {
    console.log("user account created", data);
    await emailNotificationUseCase.execute(
      { email: data.email },
      "welcome-email",
      { name: data.name, email: data.email }
    );
    message.ack();
  }
}
