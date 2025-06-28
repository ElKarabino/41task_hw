import "./CustomInput.scss"

export const CustomInput = ({placeholder , type = 'text', isLight}) => {
    return (
        <input 
            className={`CustomInput ${isLight ? 'light' : 'dark'}`}
            placeholder={placeholder}
            type={type}
        />
    )
}