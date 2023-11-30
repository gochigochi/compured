const nodemailer = require("nodemailer")

export default async function handler(req, res) {

  // SERVER VALIDATION

  console.log("API CALL")
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
  
  try {

    const info = await transporter.sendMail({
      from: 'diego@gmail', // sender address
      to: "diegoeliseoiovane@gmail.com", // list of receivers
      subject: "hola", // Subject line
      text: "hola", // plain text body
      html: "<b>sdfadlasjk;a</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);

  } catch (err) {

    console.log(err)

    res.status(400).json({ msg: err })
  }

  res.status(200).json({ msg: "ok" })
}