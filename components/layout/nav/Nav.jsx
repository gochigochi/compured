import DesktopNav from './desktop_nav/DesktopNav'
import {
    Container,
    Inner,
} from './Elements'
import MobileNav from './mobile_nav/MobileNav'

const Nav = () => {
    return (
        <Container>
            <Inner>
                <DesktopNav />
                <MobileNav />
            </Inner>
        </Container>
    )
}

export default Nav