import { emailNotificationUseCase } from "@lib/use-case";
import { Listener, Subject } from "micro-service-event";
import { Message } from "node-nats-streaming";

export class PasswordResetRequestListener extends Listener<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = "user:forgot-password";
  queueGroupName: string = "user-service";
  async onMessage(data: any, message: Message): Promise<void> {
    await emailNotificationUseCase.execute(
      { email: data.email },
      "password-reset-request",
      { name: data.name, email: data.email, ...data }
    );
    message.ack();
  }
}
