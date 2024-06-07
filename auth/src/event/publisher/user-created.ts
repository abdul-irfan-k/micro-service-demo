import { Publisher, Event, Subject } from "micro-service-event";

export class userCreatedPublisher extends Publisher<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = "user:created";
}
