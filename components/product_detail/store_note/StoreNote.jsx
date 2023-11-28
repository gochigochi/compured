import { Note } from "./Elements"

const StoreNote = ({ stock }) => {
    return (
        <Note>
            <span>{ stock[0].stock > 0 ? `Casa Matriz (${stock[0].stock})` : null }</span>
            <span>{ stock[1].stock > 0 ? `Sucursal (${stock[1].stock})` : null }</span>
        </Note>
    )
}

export default StoreNote