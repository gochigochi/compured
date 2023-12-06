import { useCategoriesContext } from "@/context/CategoriesContext"
import { useEffect } from "react"

const withCategories = (WrappedComponent) => {
  return (props) => {

    const { setCategories } = useCategoriesContext()

    useEffect(() => setCategories(props.categs))

    return <WrappedComponent {...props}/>
  }
}

export default withCategories