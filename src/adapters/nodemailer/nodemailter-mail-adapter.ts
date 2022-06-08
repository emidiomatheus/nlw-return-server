import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "aebf0b25824cba",
    pass: "c049de01761cdb"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <contato@feedget.com>',
      to: 'Matheus Emídio <emidiodeveloper@gmail.com>',
      subject,
      html: body,
    });
  }
}