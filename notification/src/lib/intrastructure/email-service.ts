import {
  nodeMailerEmail,
  nodeMailerEmailPassword,
} from "@lib/constant/constant";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export abstract class EmailService {
  abstract send(args: {
    to: string;
    content?: string;
    html?: string;
    text?: string;
    subject?: string;
  }): Promise<{ isSended: boolean; sendedMailInfo: any }>;
}

export class NodeMailerEmailService implements EmailService {
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = this.createTransporter();
  }
  public send(args: {
    to: string;
    content?: string | undefined;
    html?: string | undefined;
    text?: string | undefined;
    subject?: string | undefined;
  }): Promise<{ isSended: boolean; sendedMailInfo: any }> {
    throw new Error("Method not implemented.");
  }

  private createTransporter() {
    return nodemailer.createTransport({
      service: "email",
      auth: {
        user: nodeMailerEmail,
        pass: nodeMailerEmailPassword,
      },
    });
  }
}
