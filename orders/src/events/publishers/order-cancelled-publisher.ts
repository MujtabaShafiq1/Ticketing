import { Subjects, Publisher, OrderCancelledEvent } from "@mujtaba-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
