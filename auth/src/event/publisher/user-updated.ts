import { Publisher, Subject } from 'micro-service-event';

export class userUpdatePublisher extends Publisher<Subject.userUpdated> {
  subject: Subject.userUpdated = Subject.userUpdated;
}
