import Categories from "@/components/categories/Categories"

const categories = [
    {
        idrubro: "159",
        nombre: "Almacenamiento e Impresion",
        src: "https://drive.google.com/uc?export=view&id=1Y-rXt3mbUvn2vVNveLe0bwJ1QTrbrUZN"
    },
    {
        idrubro: "157",
        nombre: "Audio e Imagen",
        src: "https://drive.google.com/uc?export=view&id=1UXpaw9fUy0AAvn4v4--NXQHAOxWws5dE"
    },
    {
        idrubro: "182",
        nombre: "Cables",
        src: "https://drive.google.com/uc?export=view&id=13zUW8yuBC0MRlNCDPkMA4ZpO1cQQLACI"
    },
    {
        idrubro: "161",
        nombre: "Conectividad y Seguridad",
        src: "https://drive.google.com/uc?export=view&id=1rGG2zAiZMprHJTUVKBVM-UW2oQeik4cS"
    },
    {
        idrubro: "162",
        nombre: "Energia y Varios",
        src: "https://drive.google.com/uc?export=view&id=1F4j4cOye7oIskSUHxlozXcdxLWvczHCF"
    },
    {
        idrubro: "199",
        nombre: "Merchandising",
        src: "https://drive.google.com/uc?export=view&id=11t8aZ91weVXhu_lFsP2T8MYpmwqYb-t-"
    },
    {
        idrubro: "160",
        nombre: "Tecnologia y Perifericos ",
        src: "https://drive.google.com/uc?export=view&id=1duP6RmaY3A2QjutrJ-2PQjGNp8uWS0-m"
    },
]

const CategoriesPage = () => <Categories categories={categories} />

export default CategoriesPage