import { useRouter } from "next/router"
import { toUrl } from "@/utils/toUrl"
import Image from "next/image"

const ProductCard = ({ product, ...props }) => {

  const router = useRouter()
  const available = product.stockactual > 0

  const handleRouter = (name, id) => {
    const friendlyUrl = toUrl(name)
    router.push(`/producto/${id}`, `/producto/id=${id}&${friendlyUrl}`)
  }

  return (
    <button className="product-card" onClick={() => handleRouter(product.nombre, product.idproducto)} {...props} >
      <div className="relative w-full h-[150px]">
        <Image
          src={!!product.imagen_url ? product.imagen_url : "https://drive.google.com/uc?export=view&id=18QHvosnLrPYvhNFd-acD__t5hLggVmg2"}
          alt={product.nombre}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative mt-[15px] px-[15px] grid gap-2">
        <span className="absolute h-px w-[calc(100%-15px)] -top-[10px] left-1/2 -translate-x-1/2 bg-custom-gray"></span>
        <h3 className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">{product.nombre}</h3>
        <p className={`text-2xl ${available ? "text-inherit" : "text-custom-gray"}`}>
          ${product.preciofinal}
          {!available ? <span className="text-custom-red text-sm ml-2">Sin stock</span> : null}
        </p>
        <p className="text-custom-text-gray text-md">{product.nombre}</p>
      </div>
    </button>
  )
}

export default ProductCard