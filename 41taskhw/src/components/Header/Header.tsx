import { Link } from "react-router-dom"
import ProfileImg from "../../assets/img/profile.png" 
import "./Header.scss"
import  {Basket}  from "../../assets/svg/Basket"
import { BasketPopup } from "../BasketPopup/BasketPopup" 
import { useState } from "react"

export const Header = () => {
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const toggleBasket = () => {
        setIsBasketOpen(open => !open)
    }
    const closeBasket = () => setIsBasketOpen(false)
    return (
    <div className="page_header">
        <Link className="Link" to="/products">
            <h3 className="header_title">BeautyHub</h3>
        </Link>
        <div onClick={toggleBasket}>
             <Basket/>
        </div>
        {isBasketOpen && <BasketPopup onClose={closeBasket} />}
        <Link className="Link" to="/">
            <div className="page_header_profile">
                <div className="page_header_img">
                    <img src={ProfileImg} alt="profile"></img>
                </div>
                <div className="page_header_text">
                    <p>Good Morning</p>
                    <h4>Scarlett Johnson</h4>
                </div>
            </div>
        </Link>
    </div>
    )
}