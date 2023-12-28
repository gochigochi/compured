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
                    <Banner.SubTitle>Seguridad</Banner.SubTitle>
                    <Banner.Title>Instalación Profesional de Cámaras de Seguridad</Banner.Title>
                    <Banner.Text>Nos especializamos en la instalación y configuración de sistemas de cámaras de seguridad para proteger tu hogar o negocio.</Banner.Text>
                </Banner.Content>
            </Banner>
        </PopIn>
    )
}

export default Hero