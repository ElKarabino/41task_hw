import { useSelector } from "react-redux"
import "./BasketContent.scss"
import { BasketItem } from "../BasketItem/BasketItem"

export const BasketContent = () => {
    const items = useSelector(state => state.basket?.items || [])
    return (
        <div className="BasketContent">
            {items.length === 0 && <p>Empty Basket</p>}
            {items.map(item =>(
                <BasketItem key={item.id} product={item}/>
            ))}
        </div>
        
    )
}