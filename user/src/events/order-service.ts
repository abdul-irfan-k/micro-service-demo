import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';
import { Publisher } from './publisher';
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}