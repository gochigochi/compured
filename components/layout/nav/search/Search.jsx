import { useRef } from "react"
import { useRouter } from "next/router"
import { SearchSvg } from "@/components/svgs/Svgs"
import {
  SearchContainer,
  SearchInput,
  Button,
} from "./Elements"

// const handleSearch = async (term) => {

//   const response = await fetch("https://api-beta.saasargentina.com/v1/productos?callback=productoscallback&busqueda=Auriculares&datosextras=&desde=0&cantidad=100&mostrarimagenes=1&idrubro=0&orden=nombre")

//   console.log(response)

//   const json = await response.json()

//   console.log(json)

// }

const Search = () => {

  const router = useRouter()
  const term = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    if (term.current && term?.current?.length !== 0) {

      const sanitizedTerm = term.current
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-")

      router.push(`/productos/${sanitizedTerm}`, `/productos/search=${sanitizedTerm}`)
    }

  }

  return (
    <SearchContainer onSubmit={onSubmit}>
      <SearchInput type="text" name="term" onChange={(e) => term.current = e.target.value} />
      <Button type="submit">
        <SearchSvg />
      </Button>
    </SearchContainer>
  )
}

export default Search

// https://api-beta.saasargentina.com/v1/productos?callback=productoscallback&busqueda=Auriculares&datosextras=&desde=0&cantidad=100&mostrarimagenes=1&idrubro=0&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=68a4cf0ebec8403236a9d2d500ee1fc3&_=1700662451342