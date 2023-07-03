import { Publisher, OrderCreatedEvent, Subjects } from "@mujtaba-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
