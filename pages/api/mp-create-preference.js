import { getProductById } from "@/utils/getProductById"
import { MercadoPagoConfig, Preference } from "mercadopago"

export default async function handler(req, res) {

  const URL = "https://5a8c-2800-810-428-8ef5-4f6d-d5c2-cbb0-d736.ngrok-free.app"
  const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN_TEST })
  const preference = new Preference(client)
  const { productsData } = JSON.parse(req.body)
  let items

  const promises = productsData.map(async product => {

    const dbProduct = await getProductById(product.id)
    const price = Number(dbProduct.preciofinal) 
    const qty = Number(product.qty)

    return {
      id: product.id,
      title: dbProduct.nombre,
      unit_price: price,
      quantity: qty,
    }
  })

  const getProducts = async () => {

    try {

      const response = await Promise.all(promises)

      items = response

    } catch (err) {

      console.log(err)
    }
  }

  await getProducts()

  try {

    const response = await preference.create({
      body: {
        items: items,
        expires: true,
        back_urls: {
          // succes: "https://compured.wemix.wiz.com.ar/",
          // pending: "https://compured.wemix.wiz.com.ar/",
          // failure: "https://compured.wemix.wiz.com.ar/"
          success: `${URL}/`,
          pending: `${URL}/`,
          failure: `${URL}/`,
        },
        notification_url: `${URL}/api/mp-notifications`
        // shipments: {
        //   mode: "custom",
        //   cost: 3500 //TODO
        // }
      }
    })

  res.status(200).json({ id: response.id })

  } catch (err) {
      // Log error to
      console.log(err)
      res.status(500).json({ error: err })
  }
}
