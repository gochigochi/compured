import Image from "next/image"
import { useRouter } from "next/router"
import { categories } from "./consts"
import CategoryCard from "@/components/category_card/CategoryCard"

const Categories = () => {

    const router = useRouter()

    const handleRouter = (url: string, id: string) => {
        router.push(`/productos/${id}`, `/productos/id=${id}&${url}`)
    }

    return (
        <section className="rounded-lg p-6 basic-gradient">
            <header className="flex mb-5">
                <h2 className="section-title text-white">Categorías Destacadas</h2>
            </header>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {
                    categories.map(category => {
                        return (
                            <CategoryCard action={() => handleRouter(category.url, category.id)} category={category}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Categories