import { updateBusUseCase } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class busUpdatedListener extends Listener<Subject.busUpdated> {
  subject: Subject.busUpdated = Subject.busUpdated;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await updateBusUseCase.execute(data);
    message.ack();
  }
}
