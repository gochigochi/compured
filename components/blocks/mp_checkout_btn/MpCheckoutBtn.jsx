import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect } from 'react'

const MpCheckoutBtn = ({ preferenceId }) => {

    const customization = {
        checkout: {
            theme: {
                elementsColor: "#198db3",
                headerColor: "#198db3",
            }
        }
    }

    useEffect(() => {
        initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY_TEST, { locale: 'es-AR' })
    }, [])

    return (
        <Wallet
            initialization={{
                preferenceId: preferenceId,
                redirectMode: "modal",
            }}
            customization={customization}
        />
    )
}

export default MpCheckoutBtn