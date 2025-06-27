import "./CustomButton.scss"

export const CustomButton = ({icon, text, theme = 'light'}) => {
    const ClassName = `CustomButton ${theme}`
    return (
        <button className={ClassName}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    )
}