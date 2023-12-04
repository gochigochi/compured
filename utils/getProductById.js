
export async function getProductById(id) {
  
  const stores = [1, 2]
  let product = null

  try {

    const productPromises = stores.map(async (store) => {

      const uniqueProduct = await getProduct(id, store)

      return uniqueProduct
    })

    const products = await Promise.all(productPromises)

    const totalStock = products.reduce((acc, current) => {

      if (current.stockactual) {

        return acc + Number(current.stockactual)

      } else {

        return acc + 0
      }
    }, 0)

    const productsStock = products.map((product, index) => {

      return {
        stock: product.stockactual ? Number(product.stockactual) : 0,
        sucursal: stores[index],
      }
    })

    product = { ...products[0], stockactual: totalStock, productsStock }

    return product

  } catch (error) {

    console.error("Error:", error.message)
  }

  return product
}

async function getProduct(id, store) {
  try {
    const response = await fetch(
      `https://api-alfa.saasargentina.com/v0.2/productos/${id}?iue=PuaNYqpDhRBJ7K80I8WC&iddeposito=${store}`
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`)
    }

    const product = await response.json()

    return product.resultados

  } catch (error) {

    console.error("Error:", error.message)
    throw error
  }
}