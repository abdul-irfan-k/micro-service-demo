import { Publisher, Event, Subject } from "micro-service-event";

export class routeAddedPublisher extends Publisher<Event.routeAddedEvent> {
  subject: Subject.routeAdded = Subject.routeAdded;
}
