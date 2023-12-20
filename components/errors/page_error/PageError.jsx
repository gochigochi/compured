import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import SecondaryButton from "@/components/buttons/secondary/SecondaryButton"
import Link from "next/link"

const { ContainerFluid, Inner } = require("@/components/common_elements/CommonElements")


const PageError = ({ msg }) => {
  return (
    <ContainerFluid>
        <Inner>
            <div style={{
                "display": "flex", 
                "alignItems": "center",
                "justifyContent": "center",
                "gap": "10px",
                "height": "100%",
                }}>
                <p>{msg}</p>
                <SecondaryButton>
                    <Link href="/">Volver</Link>
                </SecondaryButton>
            </div>
        </Inner>
    </ContainerFluid>
  )
}

export default PageError