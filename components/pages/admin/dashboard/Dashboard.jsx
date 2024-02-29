import { useState } from "react"
import FileInput from "./file_input/FileInput"
import FilesGallery from "./files_gallery/FilesGallery"
import { ContainerFluid, Inner, PageContainer, SectionTitle } from "@/components/common_elements/CommonElements"
import { ButtonsContainer, Header } from "./Elements"
import { DesktopSvg, MobileSvg } from "@/components/svgs/Svgs"

const test = {
    desktop: ["/assets/banner-placeholder.png","/assets/banner-placeholder.png","/assets/banner-placeholder.png",],
    mobile: ["/assets/mobile-banner-placeholder.png","/assets/mobile-banner-placeholder.png","/assets/mobile-banner-placeholder.png",],
}

const Dashboard = () => {

    const [view, setView] = useState("desktop")
    const [banners, setBanners] = useState(test)

    return (
        <ContainerFluid>
            <Inner>
                <PageContainer>
                    <section>
                        <Header>
                            <SectionTitle>Banner Desktop</SectionTitle>
                            <ButtonsContainer>
                                <button onClick={() => setView("desktop")}>
                                    <DesktopSvg width={24} height={24} />
                                </button>
                                <button onClick={() => setView("mobile")}>
                                    <MobileSvg width={24} height={24} />
                                </button>
                            </ButtonsContainer>
                        </Header>
                        <FileInput view={view} />
                    </section>
                    <section>
                        <FilesGallery banners={banners} view={view} />
                    </section>
                </PageContainer>
            </Inner>
        </ContainerFluid>
    )
}

export default Dashboard