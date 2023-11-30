export const scaleOnView = {
    initial: { 
        scale: .85,
        y: 15,
    },
    animate: { 
        scale: 1,
        y: 0,
        transition: {
            delay: .05,
            ease: [0.79, 0.33, 0.14, 0.53],
        }
    }
}

export const fadeDownIn = {
    initial: {
        y: -15,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .05,
            ease: [0.79, 0.33, 0.14, 0.53],
        }
    }
}