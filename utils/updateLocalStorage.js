export const updateLocalStorage = (content) => {
    localStorage.removeItem("cart")
    localStorage.setItem("cart", JSON.stringify(content))
}