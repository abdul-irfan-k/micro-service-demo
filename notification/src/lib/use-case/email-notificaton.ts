import { nodeMailerEmail, nodeMailerEmailPassword } from "@lib/constant/constant";
import { EmailService } from "@lib/intrastructure/email-service";
import { TemplateRender } from "@lib/intrastructure/template-renderer";

export class SendEmailNotificationUseCase {
  constructor(
    private emailService: EmailService,
    private templateRender: TemplateRender
  ) {}

  async execute(receiverDetails: any, templateName: string, templateData: any) {
    const renderedTemplate = await this.templateRender.render(
      templateName,
      templateData
    );
    await this.emailService.send({
      to: receiverDetails.email,
      html: renderedTemplate,
      ...templateData,
    });
  }
}
