import { Publisher, Event, Subject } from "micro-service-event";

export class userCreatedPublisher extends Publisher<Subject.userCreated> {
  subject: Subject.userCreated = Subject.userCreated;
}
