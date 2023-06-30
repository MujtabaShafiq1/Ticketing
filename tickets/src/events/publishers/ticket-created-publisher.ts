import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@mujtaba-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
