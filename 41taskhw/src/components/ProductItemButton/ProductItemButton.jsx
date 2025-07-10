import './ProductItemButton.scss'

export const ProductItemButton =({text, theme, onClick}) => {
    return (
        <button 
            className={`ProductItemButton ${theme}`}
        >
            {text}
        </button>
    )
}