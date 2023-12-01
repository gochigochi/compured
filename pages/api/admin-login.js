export default async function handler(req, res) {

    const body = JSON.parse(req.body)

    try {

        const fetched = await fetch(`https://api-alfa.saasargentina.com/v0.2/login?iue=PuaNYqpDhRBJ7K80I8WC&S=&email=${body.user}&pass=${body.password}`, {
            method: 'GET',
        })

        const response = await fetched.json()

        if (!response.resultado.validar) {

            return res.json({ success: false, msg: "Usuario o contraseña incorrectos" })
        }


        // if (!data.resultado.usuario == 1528) {
        // USUARIO TIENE QUE SER 1528 PARA ADMIN

        if (response.resultado.validar) {

            // REDIRIGIR A DASHBOARD
            //SET COOKIES
            // return res.redirect('/dashboard')
        }

        res.redirect('/dashboard')
        /// Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        /// Quizas hacerlo desde el lado del cliente
        
        
    } catch (error) {

        console.error(`Error en login: ${error.message}`)

        return res.status(400).json({ success: false, msg: "Usuario o contraseña incorrectos" })
    }
}