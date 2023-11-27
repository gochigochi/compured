import { useEffect, useState } from "react"
import { useCategoriesContext } from "@/context/CategoriesContext"
import { LeftArrowSvg, RightArrowSvg } from "../svgs/Svgs"
import Link from "next/link"
import {
    Container,
    Button,
    MenuContainer,
    MenuItem,
    Icon,
    SubMenuHeader,
    SubMenuItem,
    Return,
} from "./Elements"

const FlayoutMenu = ({ children }) => {

    const { categories } = useCategoriesContext()
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState({ id: "", items: [] })

    useEffect(() => {

        const clickHandler = (e) => {

            if (e.target.id !== "container" && e.target.id !== "flyout-btn") {
                setOpen(!open)
                setSubMenu([])
            }
        }

        if (open) window.addEventListener("click", clickHandler)

        if (!open) window.removeEventListener("click", clickHandler)

        return () => window.removeEventListener("click", clickHandler)

    }, [open])

    console.log(categories)

    const Categories = () => {
        return (
            <>
                {
                    categories?.map(category => {
                        return (
                            <MenuItem
                                key={category.parent.idrubro}
                                onClick={(() => setSubMenu({ id: category.parent.idrubro, items: category.children }))}
                                id="flyout-btn"
                            >
                                {category.parent.nombre}
                                <Icon><RightArrowSvg /></Icon>
                            </MenuItem>
                        )
                    })
                }
            </>
        )
    }

    const SubCategories = () => {
        return (
            <>
                <SubMenuHeader>
                    <Return id="flyout-btn" onClick={() => setSubMenu({ id: "", items: [] })}>
                        <LeftArrowSvg />
                    </Return>
                    <Link href={`/productos/${subMenu.id}`}>Ver todo</Link>
                </SubMenuHeader>
                {
                    subMenu?.items.map(category => {
                        return (
                            <SubMenuItem key={category.idrubro} id="flyout-btn" href={`/productos/${category.idrubro}`}>
                                    {category.nombre}
                                    <Icon><RightArrowSvg /></Icon>
                            </SubMenuItem>
                        )
                    })
                }
            </>
        )
    }

    return (
        <Container>
            <Button id="flyout-btn" onClick={() => setOpen(!open)}>{children}</Button>
            {
                open ?
                    <MenuContainer id="container">
                        {subMenu?.items?.length > 0 ? <SubCategories /> : <Categories />}
                    </MenuContainer> :
                    null
            }
        </Container>
    )
}

export default FlayoutMenu