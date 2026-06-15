import nodemailer from "nodemailer"

type ContactRequestBody = {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody
    const name = body.name?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!name || !email || !message) {
      return Response.json({ error: "Please fill in all fields." }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM || smtpUser
    const contactTo = process.env.CONTACT_TO_EMAIL || "francoislouisemosuela@gmail.com"

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return Response.json(
        {
          error:
            "Email is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment.",
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>Portfolio inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return Response.json({ message: "Message sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ error: "Unable to send message right now." }, { status: 500 })
  }
}