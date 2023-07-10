import { Subjects, Publisher, PaymentCreatedEvent } from "@mujtaba-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
