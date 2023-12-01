
export const sendMail = async (url, data) => {

    const controller = new AbortController()
    setTimeout(() => controller.abort(), 13000);

    try {

        const response = await fetch(url, {
            method: "POST",
            signal: controller.signal,
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return { success: true, data: json }

    } catch (err) {

        console.log("ERROR.....", err)
        return { success: false, data: err }
    }
}