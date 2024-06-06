import { SendEmailNotificationUseCase } from "@lib/use-case/email-notificaton";

export class EmailNotificationController {
  constructor(
    public sendEmailNotificationUseCase: SendEmailNotificationUseCase
  ) {}

  async sendEmailNotification(
    receiverDetails: any,
    templateDetails: { templateName: string; templateData: any }
  ) {
    try {
      console.log("email send is processing");
      await this.sendEmailNotificationUseCase.execute(
        receiverDetails,
        templateDetails.templateName,
        templateDetails.templateData
      );
      console.log("email is sended");
    } catch (error) {
      console.log("error", error);
    }
  }
}
