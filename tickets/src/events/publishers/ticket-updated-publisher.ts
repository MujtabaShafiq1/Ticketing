import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@mujtaba-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
