import { useRouter } from "next/router"
import FlyoutMenu from "@/components/flyout_menu/FlyoutMenu"
import { Section, Header, Card, Grid, ButtonContainer } from "./Elements"
import { SectionTitle } from "@/components/common_elements/CommonElements"
import Image from "next/image"
import Link from "next/link"

const temp = [
    {
        id: "159",
        url: "almacenamiento-e-impresion",
        title: "Almacenamiento e impresión",
        src: `https://drive.google.com/uc?export=view&id=1Y-rXt3mbUvn2vVNveLe0bwJ1QTrbrUZN`
    },
    {
        id: "157",
        url: "audio-e-imagen",
        title: "Audio e imagen",
        src: "https://drive.google.com/uc?export=view&id=1UXpaw9fUy0AAvn4v4--NXQHAOxWws5dE"
    },
    {
        id: "160",
        url: "tecnologia-y-perifericos",
        title: "Tecnología y periféricos",
        src: "https://drive.google.com/uc?export=view&id=1duP6RmaY3A2QjutrJ-2PQjGNp8uWS0-m"
    },
    {
        id: "161",
        url: "contectividad-y-seguridad",
        title: "Conectividad y seguridad",
        src: "https://drive.google.com/uc?export=view&id=1rGG2zAiZMprHJTUVKBVM-UW2oQeik4cS"
    },
]

const Categories = () => {

    const router = useRouter()

    const handleRouter = (url, id) => {
        router.push(`/productos/${id}`, `/productos/id=${id}&${url}`)
    }

    return (
        <Section>
            <Header>
                <SectionTitle style={{ "color": "#ffffff" }}>Categorías Destacadas</SectionTitle>
                <ButtonContainer>
                    <Link href="/categorias">Ver todas</Link>
                </ButtonContainer>
            </Header>
            <Grid>
                {
                    temp.map(el => {
                        return (
                            <Card
                                onClick={() => handleRouter(el.url, el.id)}
                                role={`botón de categoría ${el.title}`}
                            >
                                <Image src={el.src} alt="" width={50} height={50} style={{ "objectFit": "cover" }} />
                                <p>{el.title}</p>
                            </Card>
                        )
                    })
                }
            </Grid>
        </Section>
    )
}

export default Categories