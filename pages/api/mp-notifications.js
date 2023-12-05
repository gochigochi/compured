export default async function handler(req, res) {

    const { query } = req
    const topic = query.topic || query.type

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

            console.log("DATA....", data)
            // data.status /// puede ser "approved"
            // data.description (nombre del producto)
            // data.order.id
            // payer.identification.number (dni del comprador)
            // payer.first_name
            // payer.last_name
            // payer.email
            // transaction_details.total_paid_amount
        }

        res.status(200)

    } catch (err) {
        console.log("ERROR...", err)
        res.send(err)
    }
}