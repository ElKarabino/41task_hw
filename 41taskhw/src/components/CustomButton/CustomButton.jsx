import "./CustomButton.scss"

export const CustomButton = ({icon, text, toggleGoogleIcon, isLight}) => {
    return (
        <button 
            className={`CustomButton ${isLight ? 'light' : 'dark'}`} 
            onClick={toggleGoogleIcon}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    )
}