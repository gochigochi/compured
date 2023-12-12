import { useEffect } from "react"

const withClickOutside = (WrappedComponent) => {

  return (props) => {

    useEffect(() => {
        
        const handleClick = (e) => {
            if (e.target.id === "outside") props.action()
        }

        window.addEventListener("click", handleClick)
        document.documentElement.style.overflow = "hidden"

        return () => {
          window.removeEventListener("click", handleClick)
          document.documentElement.style.overflow = ""
        }
    })

    return <WrappedComponent { ...props} />
  }
}

export default withClickOutside