import Image from "next/image"
import { useRouter } from "next/router"
import { Anchor } from "./Elements"

const WhatsFloatingButton = () => {

    const {pathname} = useRouter()

    console.log(pathname)

    const number = pathname === "/franquicias" ? "5492944247376" : "5492944154964"

    return (
        <Anchor
            href={`https://api.whatsapp.com/send?phone=${number}&amp;text=Hola.`}
            target="_blank"
            rel="noopener"
        >
            <Image src="https://drive.google.com/uc?export=view&id=1CKGaqyKGQ39ELT87Z5uDLVil3bplidOw" alt="" width={65} height={65} />
        </Anchor>
    )
}

export default WhatsFloatingButton