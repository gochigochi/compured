import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { DropText, InputHtml } from "./Elements"

const Input = ({ setNewFile }) => {

    const handleNewFile = (e) => {
        setNewFile({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }

    return (
        <>
            <DropText>Soltar arrchivo</DropText>
            <PrimaryButton>Subir archivo</PrimaryButton>
            <InputHtml onChange={handleNewFile} type="file" title="" value="" />
        </>
    )
}

export default Input