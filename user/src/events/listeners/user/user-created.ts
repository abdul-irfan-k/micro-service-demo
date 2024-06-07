import { createUserUseCase } from "@/lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class userCreatedListener extends Listener<Subject.userCreated> {
//@ts-ignore
  subject: Subject.userCreated = "user:created";
  queueGroupName: string = "user-service";

  //@ts-ignore
  async onMessage(data, message) {
    console.log("message data", data);
    createUserUseCase.execute(data); 
    message.ack();
  } 
}
