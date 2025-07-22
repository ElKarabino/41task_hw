    import { useSelector } from "react-redux"
    import './BasketPopup.scss'

    export const BasketPopup = ({onClose}) => {
        const items = useSelector(state => state.basket?.items || [])
        return (
            <div className="BasketPopup" >
                <div className="BasketPopup_content">
                    {items.length === 0 && <p>Empty Basket</p>}
                    {items.map(item =>(
                        <p key={item.id}>{item.title}</p>
                    ))}
                </div>
                <div className="BasketPopup_close_button"
                    onClick={onClose}
                >
                    <span className="basket_first_close_line"></span>
                    <span className="basket_second_close_line"></span>
                </div>
            </div>
        )
    }