import { Publisher, Event, Subject } from "@micro-project/micro-service-events";

export class paymentCompletedPublisher extends Publisher<Event.paymentComletedEvent> {
  subject: Subject.paymentComleted = Subject.paymentComleted;
}
