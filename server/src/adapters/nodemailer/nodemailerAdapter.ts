import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mailAdapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b96d76d564924c",
    pass: "95af617fcaceb5",
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async send({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Empresa X <oi@x.com>",
      to: "Victor <victor@deepesg.com>",
      subject,
      html: body,
    })
  }
}
