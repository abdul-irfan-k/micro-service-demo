import { NodeMailerEmailService } from "@lib/intrastructure/email-service";
import { SendEmailNotificationUseCase } from "./email-notificaton";
import { HandleBarTemplateRender } from "@lib/intrastructure/template-renderer";

export const emailNotificationUseCase = new SendEmailNotificationUseCase(
  new NodeMailerEmailService(),
  new HandleBarTemplateRender()
);
