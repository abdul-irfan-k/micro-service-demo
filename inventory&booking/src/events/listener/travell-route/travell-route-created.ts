import { createTravellRouteUseCse } from "@lib/use-cases";
import { Event, Listener, Subject } from "micro-service-event";

export class travellRouteAddedListener extends Listener<Subject.routeAdded> {
  subject: Subject.routeAdded = Subject.routeAdded;
  queueGroupName: string = "admin-service";

  //@ts-ignore
  async onMessage(data, message) {
    await createTravellRouteUseCse.execute(data);
    message.ack();
  }
}
