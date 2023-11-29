export const searchProducts = async (query) => {
  try {
      const response = await fetch(
      `https://api-alfa.saasargentina.com/v0.2/productos?desde=0&cantidad=100&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&busqueda=${query}`
      );
      if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const products = await response.json();
      return products.resultados;
  } catch (error) {
      console.error("Error:", error.message);
  }
}