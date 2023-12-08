import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useCategoriesContext } from "@/context/CategoriesContext"
import { LeftArrowSvg, RightArrowSvg } from "../svgs/Svgs"
import { toUrl } from "@/utils/toUrl"
import {
    Container,
    Button,
    MenuContainer,
    MenuItem,
    Icon,
    SubMenuHeader,
    SubMenuItem,
    Return,
    SeeAll,
} from "./Elements"

const FlyoutMenu = ({ children, ...props }) => {

    const router = useRouter()
    const { categories } = useCategoriesContext()
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState({ name: "", id: "", items: [] })

    console.log(categories)

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

    const handleRouter = (name, id) => {
        const friendlyUrl = toUrl(name)
        router.push(`/productos/${id}`, `/productos/id=${id}&${friendlyUrl}`)
    }

    const Categories = () => {
        return (
            <>
                {
                    categories?.map(category => {
                        return (
                            <MenuItem
                                key={category.parent.idrubro}
                                onClick={(() => setSubMenu({ name: category.parent.nombre, id: category.parent.idrubro, items: category.children }))}
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
                    <Return id="flyout-btn" onClick={() => setSubMenu({ name: "", id: "", items: [] })}>
                        <LeftArrowSvg />
                    </Return>
                    <SeeAll onClick={() => handleRouter(subMenu.name, subMenu.id)}>Ver todo</SeeAll>
                </SubMenuHeader>
                {
                    subMenu?.items.map(category => {
                        return (
                            <SubMenuItem
                                onClick={() => handleRouter(category.nombre, category.idrubro)}
                                key={category.idrubro}
                                id="flyout-btn"
                            >
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
            <Button id="flyout-btn" onClick={() => setOpen(!open)} {...props}>
                {children}
            </Button>
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

export default FlyoutMenu