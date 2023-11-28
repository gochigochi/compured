import { SelectorEl } from "./Elements"

const Selector = ({ stock, setQty }) => {

    const options = Array.from({length: parseInt(stock)}, (_, i) => i + 1);

    const handleChange = (e) => setQty(e.target.value)

    return (
        <SelectorEl name="qty" id="qty" onChange={handleChange}>
            {
                options.map(option => <option key={option} value={option}>{option}</option>)
            }
        </SelectorEl>
    )
}

export default Selector