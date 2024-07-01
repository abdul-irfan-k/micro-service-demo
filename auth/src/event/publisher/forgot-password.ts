import { Publisher, Event, Subject } from 'micro-service-event';

export class forgotPasswordPublisher extends Publisher<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = 'user:forgot-password';
}
