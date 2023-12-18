
const Header = ({ children, id, ...props }) => {
    return (
        <label
            className="box-title"
            for={id}
            {...props}>
            {children}
        </label>
    )
}

export default Header