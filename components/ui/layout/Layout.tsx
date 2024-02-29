import Nav from "./nav/Nav"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main style={{"flex": "1 0 0"}}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout