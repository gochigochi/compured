import { useEffect } from "react"
import { useRouter } from "next/router"

const withClickOutside = (WrappedComponent) => {

  return (props) => {

    useEffect(() => {

      const scrollWidth = window.innerWidth - document.body.offsetWidth

      const handleClick = (e) => {
        if (e.target.id === "outside") props.action()
      }

      window.addEventListener("click", handleClick)
      document.documentElement.style.overflow = "hidden"
      document.documentElement.style.paddingRight = `${scrollWidth}px`


      return () => {
        window.removeEventListener("click", handleClick)
        document.documentElement.style.overflow = ""
        document.documentElement.style.paddingRight = ""
      }
    })

    return <WrappedComponent {...props} />
  }
}

export default withClickOutside