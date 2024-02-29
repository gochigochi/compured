

const Item = ({ children, id, ...props }) => {
    return (
        <>
            <input type="radio" name="accordion" id={id} />
            <div className="box">
                <label class="box-close" htmlFor="acc-close"></label>
                {children}
            </div>
        </>
    )
}

export default Item