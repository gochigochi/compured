import StockNote from "../stock_note/StockNote";
import { SelectorContainer } from "@/components/product_detail/Elements";
import { SelectorEl } from "./Elements"

const Selector = ({ stock, setQty, children, ...props }) => {

    const options = Array.from({length: parseInt(stock)}, (_, i) => i + 1);

    const handleChange = (e) => setQty(parseInt(e.target.value))

    return (
        <SelectorContainer>
            <span>Cantidad</span>
            <SelectorEl name="qty" id="qty" onChange={handleChange}>
                {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </SelectorEl>
            { children }
        </SelectorContainer>
    )
}

Selector.StockNote = StockNote

export default Selector