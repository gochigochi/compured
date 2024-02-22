import Image from "next/image"
import { motion } from "framer-motion"
import { fadeDownIn } from "@/components/common_elements/CommonVariants"
import { clients } from "./consts"

const Clients = () => {
    return (
        <section className="section-fluid">
            <div className="section-inner">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-24 mx-auto my-6 place-items-center">
                    {
                        clients.map(item => {
                            return (
                                <motion.div
                                    variants={fadeDownIn}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{once: true}}
                                    key={item}
                                >
                                    <Image
                                        src={item}
                                        alt=""
                                        width={100}
                                        height={100}
                                        style={{ "objectFit": "contain" }}
                                    />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients