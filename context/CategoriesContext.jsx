import { createContext, useContext, useState } from "react"

const CategoriesCtx = createContext()

export const useCategoriesContext = () => useContext(CategoriesCtx)

const CategoriesContextProvider = ({ children }) => {

    const [categories, setCategories] = useState()

    return (
        <CategoriesCtx.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesCtx.Provider>
    )
}

export default CategoriesContextProvider               