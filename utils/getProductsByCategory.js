export async function getProductsByCategory(category) {

    const stores = [1, 2]
    let products = []

    for (let i = 0; i < stores.length; i++) {
        products.push(await getProducts(stores[i], category));
    }

    const productsIds = new Set(
        products.map((product) => product.idproducto)
    )

    products = [...productsIds].map((id) =>
        products.find((product) => product.idproducto === id)
    )

    return products
}

async function getProducts(store, category) {

    const qty = 100

    try {
        const response = await fetch(
            `https://api-beta.saasargentina.com/v1/productos?busqueda=&datosextras=&desde=0&cantidad=${qty}&iddeposito=${store}&mostrarimagenes=1&idrubro=${category}&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`
        )

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`)
        }

        const products = await response.json()
        return products.resultados

    } catch (error) {

        console.error(`Error en cargarProductos: ${error.message}`);
    }
}

async function getCategories(){
    
        try {
            const response = await fetch(
                `https://api-beta.saasargentina.com/v1/rubros?idrubro=0&desde=0&cantidad=100&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`
            )
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`)
            }
    
            const categories = await response.json()
            return categories
    
        } catch (error) {
    
            console.error(`Error en cargarProductos: ${error.message}`);
        }
}

async function getSubCategories(idRubro){
            try {
                const response = await fetch(
                    `https://api-beta.saasargentina.com/v1/rubros?idrubro=${idRubro}&desde=0&cantidad=100&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`
                )
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.statusText}`)
                }
        
                const subCategories = await response.json()

                const subCategoria = subCategories.map((subCategory) => {
                    return {
                        idrubro: subCategory.idrubro,
                        nombre: subCategory.nombre
                    }
                })


                return subCategoria
        
            } catch (error) {
        
                console.error(`Error en cargarProductos: ${error.message}`);
            }
}


export async function getAllCategoriesAndSubCategories() {
    try {
        const categories = await getCategories();
        const categoriesAndSubCategories = [];

        for (const category of categories) {
            const subCategories = await getSubCategories(category.idrubro);
            categoriesAndSubCategories.push({
                parent: category,
                children: [
                    ...subCategories
                ]
            });
        }
        return categoriesAndSubCategories;
    } catch (error) {
        console.error(`Error in getAllCategoriesAndSubCategories: ${error.message}`);
        throw error; // Rethrow the error to handle it further if needed
    }
}