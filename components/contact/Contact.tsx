import Map from "@/components/map/Map"
import { useRouter } from "next/router"
import ContactForm from "@/components/forms/contact_form/ContactForm"
import { LocationSvg, MailSvg, PhoneSvg } from "@/components/svgs/Svgs"

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
                            <PhoneSvg />
                            <span className="ml-5">
                                {
                                    pathname === "/franquicias" ?
                                    "+54 9 2944 24-7376" :
                                    "+54 9 2944 15-4964"
                                }
                            </span>
                        </div>
                        <div className="flex items-center">
                            <MailSvg />
                            <span className="ml-5">info@compured.com.ar</span>
                        </div>
                        <div className="flex items-center">
                            <LocationSvg />
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