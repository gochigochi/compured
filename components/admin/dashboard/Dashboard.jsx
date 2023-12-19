import { useState } from "react"
import FileInput from "./file_input/FileInput"
import FilesGallery from "./files_gallery/FilesGallery"
import { ContainerFluid, Inner, PageContainer, SectionTitle } from "@/components/common_elements/CommonElements"
import { ButtonsContainer, Header } from "./Elements"
import { DesktopSvg, MobileSvg } from "@/components/svgs/Svgs"


const Dashboard = () => {

    const [view, setView] = useState("desktop")

    return (
        <ContainerFluid>
            <Inner>
                <PageContainer>
                    <section>
                        <Header>
                            <SectionTitle style={{"marginBottom": ".5rem"}}>Banner Desktop</SectionTitle>
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
                    <FilesGallery />
                </PageContainer>
            </Inner>
        </ContainerFluid>
    )
}

export default Dashboard