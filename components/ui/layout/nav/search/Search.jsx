import { useRef } from "react"
import { useRouter } from "next/router"
import { SearchSvg } from "@/components/svgs/Svgs"
import {
  SearchContainer,
  SearchInput,
  Button,
} from "./Elements"

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
        <SearchSvg width="24" height="24" color="var(--text-black)" />
      </Button>
    </SearchContainer>
  )
}

export default Search