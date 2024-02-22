import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from '@/components/buttons/primary/PrimaryButton'
import { PlusSvg, WhatsSvg } from '@/components/svgs/Svgs'
import { scaleOnView } from '@/components/common_elements/CommonVariants'
import { motion } from 'framer-motion'
import { services } from "./consts"

const Services = () => {
    return (
        <section id="servicios">
            <h2 className="section-title">Servicios Compured</h2>
            <div className="flex flex-wrap justify-center py-6 md:py-11 md:justify-between">
                {
                    services.map(item => {
                        return (
                            <motion.div
                                className="service-card"
                                variants={scaleOnView}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="object-cover -z-10"
                                    src={item.bg}
                                    alt=""
                                    fill
                                />
                                <h3 className="text-[2rem]">{item.title}</h3>
                                <p className="border-l border-custom-blue pl-3">{item.text}</p>
                                <div>
                                        {
                                            item.isLink ?
                                            <Link href={item.url} style={{"display": "flex", "alignItems": "center"}}
                                            >
                                                <PrimaryButton>
                                                    <PlusSvg width="15px" height="15px" color="#fff"/>
                                                    <span className="text-white ml-2">Ver más</span>
                                                </PrimaryButton>
                                            </Link> :
                                            <a 
                                                href="https://api.whatsapp.com/send?phone=5492944154964&text=Hola"
                                                rel="noopene noreferrer"
                                                target="_blank"
                                                style={{"display": "flex", "alignItems": "center"}}
                                            >
                                                <PrimaryButton>
                                                    <WhatsSvg width="12px" height="12px" color="#fff"/>
                                                    <span className="text-white ml-2">Contactanos</span>
                                                </PrimaryButton>
                                            </a>
                                        }
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services