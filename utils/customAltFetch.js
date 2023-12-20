
export const customFetch = async (url, data, method) => {

    const controller = new AbortController()
    setTimeout(() => controller.abort(), 13000);

    try {

        const response = await fetch(url, {
            method: "GET",
            signal: controller.signal,
            // body: JSON.stringify(data)
        })

        return await response.json()

    } catch (err) {

        console.log("Error at custom fetch: ", err)
        return { error: true }
    }
}