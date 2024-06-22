import { createScheduleUseCase } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class scheduleCreatedListener extends Listener<Subject.scheduleAdded> {
  subject: Subject.scheduleAdded = Subject.scheduleAdded;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await createScheduleUseCase.execute(data);
    message.ack();
  }
}
