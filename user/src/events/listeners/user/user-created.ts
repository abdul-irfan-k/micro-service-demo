import { createUserUseCase } from "@/lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

console.log("subjects",Subject)
export class userCreatedListener extends Listener<Subject.userCreated> {
  subject: Subject.userCreated = Subject.userCreated;
  queueGroupName: string = "user-service";

  //@ts-ignore
  async onMessage(data, message) {
    console.log("message data", data, message);
    createUserUseCase.execute(data); 
    message.ack();
  } 
}
