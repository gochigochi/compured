import { useRouter } from "next/router"
import { toUrl } from "@/utils/toUrl"
import Image from "next/image"
import { Product } from "@/models/models"

type PropsTypes = {
  product: Product
}

const ProductCard = ({ product, ...props } : PropsTypes & React.HTMLAttributes<HTMLElement>) => {

  const router = useRouter()
  const available = parseInt(product.stockactual) > 0

  const handleRouter = (name: string, id: string) => {
    const friendlyUrl = toUrl(name)
    router.push(`/producto/${id}`, `/producto/id=${id}&${friendlyUrl}`)
  }

  return (
    <button className="product-card flex flex-col" onClick={() => handleRouter(product.nombre, product.idproducto)} {...props} >
      <div className="relative w-full min-h-[150px]">
        <Image
          src={!!product.imagen_url ? product.imagen_url : "https://drive.google.com/uc?export=view&id=18QHvosnLrPYvhNFd-acD__t5hLggVmg2"}
          alt={product.nombre}
          fill
          className="object-contain"
          sizes="(max-width: 550px) 50vw, 25vw"
        />
      </div>
      <div className="relative mt-[15px] px-[15px] flex flex-col gap-2 grow">
        <span className="absolute h-px w-[calc(100%-15px)] -top-[10px] left-1/2 -translate-x-1/2 bg-custom-gray"></span>
        <h3 className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">{product.nombre}</h3>
        <p className={`text-2xl ${available ? "text-inherit" : "text-custom-gray"}`}>
          ${product.preciofinal}
          {!available ? <span className="text-custom-red text-sm ml-2">Sin stock</span> : null}
        </p>
        <p className="text-custom-text-gray text-md gradient grow">{product.nombre}</p>
      </div>
    </button>
  )
}

export default ProductCard