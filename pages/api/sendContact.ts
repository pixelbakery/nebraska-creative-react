import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  let sendTo
  if (process.env.NODE_ENV === 'development') sendTo = 'jordan@pixelbakery.com'
  else sendTo = 'hello@pixelbakery.com'

  const body = JSON.parse(req.body)

  const message = `
  <p>A new Nebraska Creative form has been submitted. Here are the details:</p>
  <ul>
  <li><strong>name: </strong>${body.name}</li>
  <li><strong>company:</strong> ${body.entity}</li>
  <li><strong>email:</strong> ${body.email}</li>
  <li><strong>subject: </strong> ${body.subject}</li>
  </ul>
  <p><strong>message:</strong></p>
  <p>${body.message}</p>
  `

  await mail.send({
    to: `${sendTo}`,
    from: {
      email: 'hello@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    replyTo: {
      email: `${body.email}`,
      name: `${body.name}`,
    },
    subject: `NE-C: ${body.subject}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })
}
