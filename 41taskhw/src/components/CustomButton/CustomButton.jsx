import "./CustomButton.scss"

export const CustomButton = ({icon, text, toggleGoogleIcon, isLight, onClick}) => {
    return (
        <button 
            className={`CustomButton ${isLight ? 'light' : 'dark'}`} 
            onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    )
}