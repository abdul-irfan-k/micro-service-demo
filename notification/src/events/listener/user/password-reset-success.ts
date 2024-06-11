import { emailNotificationUseCase } from "@lib/use-case";
import { Listener, Subject } from "micro-service-event";
import { Message } from "node-nats-streaming";

export class PasswordResetSuccessListener extends Listener<Subject.userCreated> {
  //@ts-ignore
  subject: Subject.userCreated = "user:password-reset-success";
  queueGroupName: string = "user-service";
  async onMessage(data: any, message: Message): Promise<void> {
    await emailNotificationUseCase.execute(
      { email: data.email },
      "password-reset-success",
      { name: data.name, email: data.email, ...data }
    );
    message.ack();
  }
}
