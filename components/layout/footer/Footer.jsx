import { useRouter } from "next/router"
import { useState } from "react"
import { ContainerFluid, Inner } from "@/components/common_elements/CommonElements"
import { Container, Text, SocialIcons } from "./Elements"
import { FacebookSvg, IgSvg } from "@/components/svgs/Svgs"
import { useEffect } from "react"

const Footer = () => {

  const { pathname } = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(pathname === "/")
  }, [pathname])

  return (
    <ContainerFluid>
        <Inner>
            <Container>
              <Text>Copyright	&#169; Compured, 2023, Av. Arrayanes 282 - Local 2, Villa La Angostura, Neuquén.</Text>
              <SocialIcons>
                { show ? <a href="#contacto" style={{fontSize: ".8rem"}}>Botón de arrepentimiento</a> : null }
                <FacebookSvg width="24" height="24" color="var(--text-light)" />
                <IgSvg width="24" height="24" color="var(--text-light)" />
              </SocialIcons>
            </Container>
        </Inner>
    </ContainerFluid>
  )
}

export default Footer