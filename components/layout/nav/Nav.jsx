import dynamic from 'next/dynamic'
import {
    Container,
    Inner,
} from './Elements'
const DynDesktopNav = dynamic(() => import('./desktop_nav/DesktopNav'))
const DynMobileNav = dynamic(() => import('./mobile_nav/MobileNav'))

const Nav = () => {
    return (
        <Container>
            <Inner>
                <DynDesktopNav />
                <DynMobileNav />
            </Inner>
        </Container>
    )
}

export default Nav