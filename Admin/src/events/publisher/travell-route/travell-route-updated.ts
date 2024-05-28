import { Publisher, Event, Subject } from "micro-service-event";

export class travellRouteUpdatedPublisher extends Publisher<Event.routeUpdatedEvent> {
  subject: Subject.routeUpdated = Subject.routeUpdated;
}
