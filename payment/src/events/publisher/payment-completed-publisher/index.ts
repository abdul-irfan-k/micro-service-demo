import { Publisher, Event, Subject } from "micro-service-event";

export class paymentCompletedPublisher extends Publisher<Event.paymentComletedEvent> {
  subject: Subject.paymentComleted = Subject.paymentComleted;
}
