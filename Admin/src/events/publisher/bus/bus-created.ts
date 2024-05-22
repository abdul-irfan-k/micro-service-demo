import { Publisher, Event, Subject } from "micro-service-event";

export class busCreatedPublisher extends Publisher<Event.busAddedEvent> {
  subject: Subject.busAdded = Subject.busAdded;
}
