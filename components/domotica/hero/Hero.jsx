import PopIn from "@/components/animations/PopIn"
import Banner from "@/components/banner/Banner"

const Hero = ({ mobileSrc, desktopSrc}) => {
    return (
        <PopIn>
            <Banner
                mobileSrc={mobileSrc}
                desktopSrc={desktopSrc}
            >
                <Banner.Content>
                    <Banner.SubTitle>Domótica</Banner.SubTitle>
                    <Banner.Title>Transforma tu hogar en un espacio inteligente y sostenible</Banner.Title>
                    <Banner.Text>Mejora la eficiencia energética, la comodidad y la seguridad en los hogares, brindando una experiencia de vida más conectada y conveniente</Banner.Text>
                </Banner.Content>
            </Banner>
        </PopIn>
    )
}

export default Hero