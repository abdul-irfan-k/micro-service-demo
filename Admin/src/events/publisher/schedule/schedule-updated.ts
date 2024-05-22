import { Publisher, Event, Subject } from "micro-service-event";

export class scheduleUpdatedPublisher extends Publisher<Event.scheduleUpdatedEvent> {
  subject: Subject.scheduleUpdated = Subject.scheduleUpdated;
}
