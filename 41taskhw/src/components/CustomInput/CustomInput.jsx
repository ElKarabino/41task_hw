import "./CustomInput.scss"

export const CustomInput = ({placeholder , type = 'text', isLight, value, onChange}) => {
    return (
        <input 
            className={`CustomInput ${isLight ? 'light' : 'dark'}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}