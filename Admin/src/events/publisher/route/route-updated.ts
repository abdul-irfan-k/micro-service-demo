import { Publisher, Event, Subject } from "micro-service-event";

export class routeUpdatedPublisher extends Publisher<Event.routeUpdatedEvent> {
  subject: Subject.routeUpdated = Subject.routeUpdated;
}
