import { Publisher, Event, Subject } from "micro-service-event";

export class busUpdatedPublisher extends Publisher<Event.busUpdateEvent> {
  subject: Subject.busUpdated = Subject.busUpdated;
}
