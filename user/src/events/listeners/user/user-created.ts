import { createUserUseCase } from "@/lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class userCreatedListener extends Listener<Subject.userCreated> {
  subject: Subject.userCreated = Subject.userCreated;
  queueGroupName = "user-service";

  //@ts-ignore
  async onMessage(data, message) {
    createUserUseCase.execute(data);
    message.ack();
  }
}
