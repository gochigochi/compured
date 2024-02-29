import { Button, Grid, Thumb } from './Elements'
import Image from 'next/image'

const FilesGallery = ({ banners, view }) => {

  const handleRemoveFile = () => {
    console.log("call api banner method delete")
  }
  
  return (
    <Grid>
      {
        view === "desktop" ? banners.desktop.map(banner => {
          return(
            <Thumb view={view}>
              <Image src={banner} alt="" style={{"objectFit": "cover"}} fill />
              <Button onClick={() => handleRemoveFile(banner)}>Borrar</Button>
            </Thumb>
          )
        }) :
        banners.mobile.map(banner => {
          return(
            <Thumb view={view}>
              <Image src={banner} alt="" style={{"objectFit": "cover"}} fill />
              <Button onClick={() => handleRemoveFile(banner)}>Borrar</Button>
            </Thumb>
          )
        })
      }
    </Grid>
  )
}

export default FilesGallery