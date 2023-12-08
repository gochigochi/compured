import { useEffect } from "react"

const withClickOutside = (WrappedComponent) => {

  return (props) => {

    useEffect(() => {
        
        const handleClick = (e) => {
            if (e.target.id === "outside") props.action()
        }

        window.addEventListener("click", handleClick)

        return () => window.removeEventListener("click", handleClick)
    })

    return <WrappedComponent { ...props} />
  }
}

export default withClickOutside