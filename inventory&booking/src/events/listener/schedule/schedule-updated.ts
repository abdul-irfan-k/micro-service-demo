import { updateScheduleUseCase } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class scheduleUpdatedListener extends Listener<Subject.scheduleUpdated> {
  subject: Subject.scheduleUpdated = Subject.scheduleUpdated;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await updateScheduleUseCase.execute(data);
    message.ack();
  }
}
