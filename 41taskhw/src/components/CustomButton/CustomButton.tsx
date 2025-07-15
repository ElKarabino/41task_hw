import { MouseEventHandler, ReactElement } from "react"
import "./CustomButton.scss"

type CustomButtonProps = {
    icon?: ReactElement,
    text: string,
    isLight: boolean,
    onClick?: MouseEventHandler,
}

export const CustomButton = ({icon, text, isLight, onClick}:CustomButtonProps) => {
    return (
        <button 
            className={`CustomButton ${isLight ? 'light' : 'dark'}`} 
            onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    )
}