import './ProductsItemButton.scss'

export const ProductsItemButton =({text, theme}) => {
    return (
        <button 
            className={`ProductsItemButton ${theme}`}
        >
            {text}
        </button>
    )
}