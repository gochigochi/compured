import nodemailer from "nodemailer"

export default async function handler(req, res) {
    
    const { query } = req
    const topic = query.topic || query.type
    let orderData = {}

    try {

        if (topic === "payment") {

            const orderId = query.id || query["data.id"]

            // GET THE ORDER STATUS
            const result = await fetch(`https://api.mercadopago.com/v1/payments/${orderId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN_TEST}`,
                },
            })

            const data = await result.json()

            if (data.status !== "approved") {

                res.status(500).send({ success: false, err: err })
            }

            orderData = {
                status: data.status,
                description: data.description, //product name
                orderId: data.order.id,
                payerId: data.payer.identification.number,
                payerName: data.payer.first_name,
                payerLastName: data.payer.last_name,
                payerEmail: data.payer.email,
                totalPaid: data.transaction_details.total_paid_amount
            }
        }


    } catch (err) {
        res.status(500).send({ success: false, err: err })
    }

    // SEND CONFIRMATION EMAILS
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        // TO COMPANY
        await transporter.sendMail({
            from: "info@compured.com.ar", // sender address
            // to: "info@compured.com.ar", // list of receivers
            to: "diegoeliseoiovane@gmail.com",
            subject: `Confirmacion de compra de ${orderData.description}`, // Subject line
            html: `<b>Compra</b>
                        <br></br>
                        <p>${orderData.status}</p>
                        <br></br>
                        <p>Producto</p>
                        <p>${orderData.description}</p>
                        <br></br>
                        <p>Número de orden</p>
                        <p>${orderData.orderId}</p>
                        <br></br>
                        <p>Detalles del comprador</p>
                        <p>${orderData.payerName}</p>
                        <br></br>
                        <p>${orderData.payerLastName}</p>
                        <br></br>
                        <p>${orderData.payerEmail}</p>
                        <br></br>
                        <p>${orderData.totalPaid}</p>
                        <br></br>
                        <p>Total del pago</p>
                        <p>${orderData.totalPaid}</p>
                `,
        })

        // TO CLIENT
        await transporter.sendMail({
            from: "info@compured.com.ar", // sender address
            to: orderData.payerEmail,
            subject: `Confirmacion de compra de ${orderData.description}`, // Subject line
            html: `<b>Compra</b>
                        <br></br>
                        <p>${orderData.status}</p>
                        <br></br>
                        <p>Producto</p>
                        <p>${orderData.description}</p>
                        <br></br>
                        <p>Número de orden</p>
                        <p>${orderData.orderId}</p>
                        <br></br>
                        <p>Total del pago</p>
                        <p>${orderData.totalPaid}</p>
                `,
        })

        res.status(200).json({ success: true })

    } catch (err) {

        res.status(500).send({ success: false, err: err })
    }


    res.status(200)
}