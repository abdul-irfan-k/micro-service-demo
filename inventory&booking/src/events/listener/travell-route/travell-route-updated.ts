import { updateTravellRouteUseCase } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class travellRouteUpdatedListener extends Listener<Subject.routeUpdated> {
  subject: Subject.routeUpdated = Subject.routeUpdated;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await updateTravellRouteUseCase.execute(data);
    message.ack();
  }
}
