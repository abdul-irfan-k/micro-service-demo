import { Listener } from "./listener";
import { Subjects } from "./subjects";
import{Message} from 'node-nats-streaming'
import {Publisher} from './publisher'
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "tickets-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);
    msg.ack();
  }
}

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
