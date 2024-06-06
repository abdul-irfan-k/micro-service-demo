import { emailNotificationUseCase } from "@lib/use-case";
import { EmailNotificationController } from "./email-notification";

export const emailNotificationController = new EmailNotificationController(emailNotificationUseCase)