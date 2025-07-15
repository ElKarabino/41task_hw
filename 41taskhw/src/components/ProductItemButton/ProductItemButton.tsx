import { MouseEventHandler } from 'react'
import './ProductItemButton.scss'

type ProductItemButtonProps = {
    text: string,
    theme: string,
    onClick?: MouseEventHandler,
}

export const ProductItemButton =({text, theme, onClick}:ProductItemButtonProps ) => {
    return (
        <button 
            className={`ProductItemButton ${theme}`}
            onClick={onClick}   
        >
            {text}
        </button>
    )
}