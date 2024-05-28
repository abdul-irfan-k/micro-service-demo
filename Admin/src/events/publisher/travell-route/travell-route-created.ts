import { Publisher, Event, Subject } from "micro-service-event";

export class travellRouteAddedPublisher extends Publisher<Event.routeAddedEvent> {
  subject: Subject.routeAdded = Subject.routeAdded;
}
