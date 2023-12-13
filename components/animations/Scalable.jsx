import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Scalable = ({ children }) => {

    const elementRef = useRef()
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [.4, 1])


    return (
        <motion.div
          ref={elementRef}
          style={{ 
            scale: scaleProgress,
            opacity: opacityProgress, 
          }}
        >
            {children}
        </motion.div>
    )
}

export default Scalable