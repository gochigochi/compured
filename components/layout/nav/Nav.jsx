import dynamic from 'next/dynamic'
import { useState } from "react"
import Conditions from './conditions/Conditions'
import {
    Container,
    Inner,
    Top,
    TopInner,
} from './Elements'
import { conditions } from './conditions/data'

const DynDesktopNav = dynamic(() => import('./desktop_nav/DesktopNav'))
const DynMobileNav = dynamic(() => import('./mobile_nav/MobileNav'))

const Nav = () => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <Top>
                <TopInner>
                    <p>Arrayanes 282, local 2, Villa La Angostura</p>
                    <button onClick={() =>setOpen(!open)}>Términos y condiciones</button>
                </TopInner>
            </Top>
            <Inner>
                <DynDesktopNav />
                <DynMobileNav />
            </Inner>
            { open ? <Conditions action={() => setOpen(!open)}>{conditions}</Conditions> : null }
        </Container>
    )
}

export default Nav