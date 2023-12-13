import Scalable from '@/components/scalable/Scalable'
import ReactPlayer from 'react-player'
import { VideoContainer } from './Elements'
import { SectionTitle } from '@/components/common_elements/CommonElements'

const ProjectsSection = () => {

  return (
    <section>
      <Scalable>
        <SectionTitle style={{ "marginBottom": "15px" }}>Proyectos</SectionTitle>
        <VideoContainer>
          <ReactPlayer
            url="https://youtube.com/watch?v=0ht_wihBe40"
            width="100%"
            height="100%"
          />
        </VideoContainer>
      </Scalable>
    </section>
  )
}

export default ProjectsSection