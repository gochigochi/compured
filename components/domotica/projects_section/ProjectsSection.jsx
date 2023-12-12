import { SectionTitle } from '@/components/common_elements/CommonElements'
import React from 'react'
import { VideoContainer } from './Elements'
import ReactPlayer from 'react-player'

const ProjectsSection = () => {
  return (
    <section>
        <SectionTitle style={{"marginBottom": "15px"}}>Proyectos</SectionTitle>
        <VideoContainer>
            <ReactPlayer
                url="https://youtube.com/watch?v=0ht_wihBe40"
                width="100%"
                height="100%"
            />
        </VideoContainer>
    </section>
  )
}

export default ProjectsSection