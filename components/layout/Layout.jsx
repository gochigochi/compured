import Nav from "./nav/Nav"
// import Footer from "./footer/Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout