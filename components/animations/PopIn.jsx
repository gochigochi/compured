import { motion } from "framer-motion"

const PopIn = ({children, ...props}) => {
  return (
    <motion.div
        initial={{opacity: 0, scale: .8}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true, amount: .7}}
        {...props}
    >
        {children}
    </motion.div>
  )
}

export default PopIn