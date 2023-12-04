import { getProductById } from "@/utils/getProductById"
import { MercadoPagoConfig, Preference } from "mercadopago"

export default async function handler(req, res) {

  const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN_TEST })
  const preference = new Preference(client)
  const { productsData } = JSON.parse(req.body)
  let items

  const promises = productsData.map(async product => {

    const dbProduct = await getProductById(product.id)
    const price = Number(dbProduct.precio) 
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

      // console.log("RESPONSEEEEEEEEEEE", response)
      items = response

    } catch (err) {
      console.log(err)
    }
  }

  await getProducts()

  console.log("ITEMS.....", items)

  try {

    const response = await preference.create({
      body: {
        items: items,
      }
    })

  res.status(200).json({ id: response.id })

  } catch (err) {
      // Log error to
      console.log(err)
      res.status(500).json({ error: err })
  }
}
