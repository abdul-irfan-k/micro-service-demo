import { Publisher, Subject } from 'micro-service-event';

export class passwordResetSuccess extends Publisher<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = 'user:password-reset-success';
}
