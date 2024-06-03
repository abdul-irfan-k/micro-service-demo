import { Event, Listener, Subject } from "micro-service-event";
import { createUserUseCase } from "@/lib/use-cases";

export class userCreatedListener extends Listener<Subject.userCreated> {
  subject: Subject.userCreated = Subject.userCreated;
  queueGroupName: string = "user-service";

  async onMessage(data, message): void {
    console.log("message data", data, message);
    await createUserUseCase.execute(data);
    message.ack();
  }
}
