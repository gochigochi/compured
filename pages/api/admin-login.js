export default async function handler(req, res) {

    const body = JSON.parse(req.body)
    const url = `https://api-alfa.saasargentina.com/v0.2/login?iue=PuaNYqpDhRBJ7K80I8WC&S=&email=${body.user}&pass=${body.password}`

    try {

        const fetched = await fetch(url, { method: 'GET' })

        const response = await fetched.json()

        if (!response.resultado.validar) {

            res.json({ success: false, msg: "Usuario o contraseña incorrectos" })
        }

        if (response.resultado.validar) {

            const maxAge = 60 * 60 * 24
            const cookieHeader = `accessToken=${response.resultado.usuario}; Path=/; Max-Age=${maxAge}; HttpOnly`
            res.setHeader("Set-Cookie", cookieHeader)
            res.status(200).json({ success: true, msg: "Loggd"})
        }

    } catch (error) {

        console.error(`Error en login: ${error.message}`)

        res.status(400).json({ success: false, msg: "Usuario o contraseña incorrectos" })
    }
}