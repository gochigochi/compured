import { useRouter } from "next/router"
import Map from "@/components/blocks/map/Map"
import ContactForm from "@/components/blocks/forms/contact_form/ContactForm"

const Contact = () => {

    const { pathname } = useRouter()

    return (
        <section className="block min-[860px]:grid grid-cols-12 gap-x-[10px] rounded-xl shadow-soft p-3 my-10">
            <div className="flex flex-col gap-6 col-span-5 p-[10px] sm:p-5 md:p-4 mb-6 md:mb-0">
                <h2 className="section-title">Contactanos</h2>
                <ContactForm />
            </div>
            <div className="col-span-7">
                <div className="relative rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg w-full h-[500px] md:h-full overflow-hidden">
                    <div className="relative top-0 left-0 p-[35px_10px_10px_10px] mb-6 shadow-none rounded-none bg-white z-[100] flex flex-col gap-4 lg:absolute lg:top-4 lg:left-4 lg:p-4 lg:rounded-lg">
                        <div className="flex items-center">
                            {/* PHONE SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="ml-5">
                                {
                                    pathname === "/franquicias" ?
                                        "+54 9 2944 24-7376" :
                                        "+54 9 2944 15-4964"
                                }
                            </span>
                        </div>
                        <div className="flex items-center">
                            {/* MAIL SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                            </svg>
                            <span className="ml-5">info@compured.com.ar</span>
                        </div>
                        <div className="flex items-center">
                            {/* LOCATION SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="ml-5">Av. Arrayanes 282 - Local 2, Villa La Angostura, Neuquén</span>
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
        </section>
    )
}

export default Contact