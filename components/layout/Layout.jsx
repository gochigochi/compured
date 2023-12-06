import { useRouter } from "next/router"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {

    const { pathname} = useRouter()

    if (pathname === "/login" || pathname === "/dashboard") {
        return(
            <main>{children}</main>
        )
    }

    return (
        <>
            <Nav />
            <main style={{"flex": "1 0 0"}}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout