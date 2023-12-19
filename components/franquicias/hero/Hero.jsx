import PopIn from "@/components/animations/PopIn"
import Banner from "@/components/banner/Banner"
import { FloatingImgContainer, FloatingImgInner } from "./Elements"
import Image from "next/image"

const Hero = ({ mobileSrc, desktopSrc }) => {
    return (
        <div style={{"position": "relative"}}>
            <PopIn>
                <Banner
                    mobileSrc={mobileSrc}
                    desktopSrc={desktopSrc}
                >
                    <Banner.Content>
                        <Banner.SubTitle>Somos Compured</Banner.SubTitle>
                        <Banner.Title style={{"color": "var(--text-black)"}}>Te invitamos a ser dueño de tu futuro invirtiendo en un negocio Tecnológico y Sustentable</Banner.Title>
                        <Banner.Text style={{"color": "var(--text-black)"}}>Mas de 23 años brindando soluciones tecnológicas personales y corporativas.</Banner.Text>
                    </Banner.Content>
                </Banner>
                <FloatingImgContainer>
                    <FloatingImgInner>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1pOjMpynB49injQ4gAY73sLS6KoESB17Q"
                            alt=""
                            style={{"objectFit": "contain"}}
                            fill
                        />
                    </FloatingImgInner>
                </FloatingImgContainer>
            </PopIn>
        </div>
    )
}

export default Hero