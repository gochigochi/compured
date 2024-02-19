import Image from "next/image"
import { CustomCategory } from "@/models/models"

type PropsTypes = {
    action: () => void
    category: CustomCategory
}

const CategoryCard = ({ action, category } : PropsTypes) => {
    return (
        <article
            className="category-card bg-[#f0f0f0]"
            onClick={action}
            role={`botón de categoría ${category.title}`}
        >
            <Image src={category.src} alt="" width={50} height={50} className="object-cover rounded-full justify-self-center" sizes="25vw" />
            <p className="self-center">{category.title}</p>
        </article>
    )
}

export default CategoryCard