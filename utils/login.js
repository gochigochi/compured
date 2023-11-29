const login = async (username, password) => {

    try {
        const response = await fetch(`https://api-alfa.saasargentina.com/v0.2/login?iue=PuaNYqpDhRBJ7K80I8WC&S=&email=${username}&pass=${password}`, {
            method: 'GET',
        })

        const data = await response.json()

        if (!data.resutado.validar) {

            throw new Error('Usuario o contraseña incorrectos')
        }

        if (!data.resultado.usuario == 1528) {

            throw new Error('El usuario no tiene permisos para ingresar')
        }

        return data.resultado

    } catch (error) {
        
        console.error(`Error en login: ${error.message}`)
    }
}