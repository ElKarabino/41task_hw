import "./CustomInput.scss"

export const CustomInput = ({placeholder , type}) => {
    return (
        <input 
            className="CustomInput"
            placeholder={placeholder}
            type={type}
        />
    )
}