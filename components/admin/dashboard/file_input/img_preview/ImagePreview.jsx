import { useRef } from 'react'
import { Button, Input, Overlay } from './Elements'
import Image from 'next/image'

const ImagePreview = ({ src, setNewFile, newFile }) => {

    const inputRef = useRef()

    const handleNewFile = (e) => {
        setNewFile({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleUpload = () => {
        console.log("UPLOAD: ", newFile)
    }

    return (
        <>
            <Image src={src} alt="" fill style={{ "objectFit": "cover" }} />
            <Overlay>
                <Button onClick={handleUpload}>Guardar</Button>
                <Button onClick={handleClick}>
                    <Input ref={inputRef} onChange={handleNewFile} type="file" title="" value="" />
                    Cambiar
                </Button>
                <Button onClick={() => setNewFile({})}>Eliminar</Button>
            </Overlay>
        </>
    )
}

export default ImagePreview