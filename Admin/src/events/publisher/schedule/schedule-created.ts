import { Publisher, Event, Subject } from "micro-service-event";

export class scheduleAddedPublisher extends Publisher<Event.scheduleAddedEvent> {
  subject: Subject.scheduleAdded = Subject.scheduleAdded;
}
