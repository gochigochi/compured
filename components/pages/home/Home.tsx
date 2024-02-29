import dynamic from "next/dynamic"
import BannerCarousel from "@/components/blocks/banner_carousel/BannerCarousel"
import Featured from "@/components/blocks/featured/Featured"
import Categories from "./categories/Categories"
import { Products } from "@/models/models"
const Clients = dynamic(() => import("./clients/Clients"))
const Contact = dynamic(() => import("@/components/blocks/contact/Contact"))

type PropsTypes = {
    products: Products
}

const Home = ({ products }: PropsTypes) => {
    return (
        <div className="section-fluid">
            <div className="section-inner flex flex-col gap-20">
                <BannerCarousel />
                <Featured products={products} />
                <Featured products={products} />
                <Categories />
                <Featured products={products} />
                <Clients />
                <Contact />
            </div>
        </div>
    )
}

export default Home