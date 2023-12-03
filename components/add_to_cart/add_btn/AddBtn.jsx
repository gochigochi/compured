import PrimaryButton from "@/components/buttons/primary/PrimaryButton"

const AddBtn = ({ onClick, state, children, ...props }) => {
    return (
        <PrimaryButton
            onClick={onClick}
            disabled={state}>
            {children}
        </PrimaryButton>
    )
}

export default AddBtn