
export const customFetch = async (url, data, method = "POST") => {

    const controller = new AbortController()
    setTimeout(() => controller.abort(), 7000);

    try {

        const response = await fetch(url, {
            method: method,
            signal: controller.signal,
            body: JSON.stringify(data)
        })

        return await response.json()

    } catch (err) {

        console.log("Error at custom fetch: ", err)
        return { error: true }
    }
}