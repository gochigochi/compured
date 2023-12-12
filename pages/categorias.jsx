import Categories from "@/components/categories/Categories"

const categories = [
    {
        idrubro: "159",
        nombre: "Almacenamiento e Impresion",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "157",
        nombre: "Audio e Imagen",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "182",
        nombre: "Cables",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "161",
        nombre: "Conectividad y Seguridad",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "162",
        nombre: "Energia y Varios",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "199",
        nombre: "Merchandising",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
    {
        idrubro: "160",
        nombre: "Tecnologia y Perifericos ",
        src: "https://drive.google.com/uc?export=view&id=1BG91kj75BI-ihCpkY_2ByY1jKF2Jiebb"
    },
]

const CategoriesPage = () => <Categories categories={categories} />

export default CategoriesPage