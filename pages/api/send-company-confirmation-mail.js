import nodemailer from "nodemailer"

export default async function handler(req, res) {

  // const body = JSON.parse(req.body)

  console.log("REQs.....", body)

  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP,
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // })

  try {

    // console.log("CONFIRMATION BODY......", body)
    // await transporter.sendMail({
    //   from: "info@compured.com.ar", // sender address
    //   // to: "info@compured.com.ar", // list of receivers
    //   to: "diegoeliseoiovane@gmail.com",
    //   subject: `Mensaje de ${body.name} desde Compured`, // Subject line
    //   html: `<b>${body.message}</b><br></br><p>${body.email}</p>`, // html body
    // })

    res.status(200).json({ success: true })

  } catch (err) {

    res.status(400).json({ success: false, msg: err })
  }
}