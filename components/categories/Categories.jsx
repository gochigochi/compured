import Image from "next/image"
import { useRouter } from "next/router"
import { ContainerFluid, Inner, SectionTitle } from "../common_elements/CommonElements"
import { List, El } from "./Elements"
import { toUrl } from "@/utils/toUrl"

const Categories = ({ categories }) => {

    const router = useRouter()

    const handleRouter = (name, id) => {
        const url = toUrl(name)
        router.push(`/productos/${id}`, `/productos/id=${id}&${url}`)
    }

    return (
        <ContainerFluid bgcolor="#f0f0f0" style={{ "boxShadow": "var(--light-shadow)" }}>
            <Inner>
                <List>
                    <SectionTitle>Categorías</SectionTitle>
                        {
                            categories.map(category => {
                                return (
                                    <El
                                        key={category.idrubro}
                                        onClick={() => handleRouter(category.nombre, category.idrubro)}
                                        role="link"
                                        tabIndex="0"
                                    >
                                        <Image src={category.src} alt="" width={50} height={50} />
                                        <p>{category.nombre}</p>
                                    </El>
                                )
                            })
                        }

                </List>
            </Inner>
        </ContainerFluid>
    )
}

export default Categories