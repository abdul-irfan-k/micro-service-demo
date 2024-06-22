import { createBusUseCase } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class busAddedListener extends Listener<Subject.busAdded> {
  subject: Subject.busAdded = Subject.busAdded;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await createBusUseCase.execute(data);
    message.ack();
  }
}
