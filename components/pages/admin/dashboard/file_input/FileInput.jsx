import { useState } from 'react'
import { FileUploadContainer } from './Elements'
import Input from './input/Input';
import ImagePreview from './img_preview/ImagePreview';

const FileInput = ({ view }) => {

    const [newFile, setNewFile] = useState({})
    const [isDragging, setDragging] = useState(false)

    const handleDragging = () => setDragging(!isDragging)

    return (
        <FileUploadContainer
            dragging={isDragging}
            onDragEnter={handleDragging}
            onDragLeave={handleDragging}
            onDrop={handleDragging}
            view={view}
        >
            {
                !newFile.url ?
                    <Input setNewFile={setNewFile} /> :
                    <ImagePreview src={newFile.url} setNewFile={setNewFile} newFile={newFile} />
            }
        </FileUploadContainer>
    )
}

export default FileInput