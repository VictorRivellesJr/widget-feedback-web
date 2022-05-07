import { MailAdapter } from "../adapters/mailAdapter"
import { FeedbacksRepository } from "../repositories/feedbacksRepository"

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async handle(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.send({
      subject: "Feedback enviado",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #333;">`,
        `<h1>Feedback recebido</h1>`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`,
      ].join("\n"),
    })
  }
}
