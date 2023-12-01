import nodemailer from "nodemailer"
import { ContactMessageSchema } from "@/utils/zodSchemas"

export default async function handler(req, res) {

  const body = JSON.parse(req.body)

  // SERVER VALIDATION
  const validation = ContactMessageSchema.safeParse(body)
  
  if (!validation.success) {
    throw new Error("Error en los datos del cliente")
    res.status(400)
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  try {

    await transporter.sendMail({
      from: "info@compured.com.ar", // sender address
      to: "info@compured.com.ar", // list of receivers
      subject: `Mensaje de ${body.name} desde Compured`, // Subject line
      html: `<b>${body.message}</b><br></br><p>${body.email}</p>`, // html body
    })

    res.status(200).json({ msg: "ok" })

  } catch (err) {

    console.log(err)

    res.status(400).json({ msg: err })
  }
}