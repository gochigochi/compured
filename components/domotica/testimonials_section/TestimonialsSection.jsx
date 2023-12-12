import Testimonials from '@/components/testimonials/Testimonials'
import { SectionTitle } from '@/components/common_elements/CommonElements'

const temp = [
    {
        id: 1,
        name: "Satya Nadella",
        prof: "CEO de Microsoft",
        text: "La domótica es una inversión inteligente que mejora la eficiencia energética, la comodidad y la seguridad en los hogares, brindando una experiencia de vida más conectada y conveniente",
        src: "https://drive.google.com/uc?export=view&id=1F0CB8u-gtGzcHvzoC697dLRa6DkVNU8v",
        
    },
    {
        id: 2,
        name: "Tim Cook",
        prof: "CEO de Apple",
        text: "La tecnología domótica está revolucionando la forma en que vivimos y interactuamos con nuestros hogares. Invertir en domótica es invertir en un futuro más inteligente y sostenible",
        src: "https://drive.google.com/uc?export=view&id=14e6yLrBYXGLbTmp5PcuyYm7flHtqL43E",
    },
    {
        id: 3,
        name: "Sundar Pichai",
        prof: "CEO de Google",
        text: "La domótica ofrece un gran potencial para transformar nuestros hogares en espacios más eficientes y personalizados. Al invertir en domótica, apostamos por un estilo de vida más conveniente adaptable a nuestras necesidades",
        src: "https://drive.google.com/uc?export=view&id=1K7dmyu-H6L1qCih3QMxJvUgt3IeN3ZZK",
    },
]

const TestimonialsSection = () => {
    return (
        <section>
            <SectionTitle style={{"marginBottom": "15px"}}>Palabra de expertos</SectionTitle>
            <Testimonials content={temp} />
        </section>
    )
}

export default TestimonialsSection