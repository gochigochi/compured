// import Nav from "./nav/Nav"
// import Footer from "./footer/Footer"
// import { Main } from "./Elements"
// import SubNav from "./sub_nav/SubNav"

const Layout = ({ children }) => {
    return (
        <>
            {/* <Nav /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout