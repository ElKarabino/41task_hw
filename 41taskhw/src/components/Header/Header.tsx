import { Link } from "react-router-dom"
import ProfileImg from "../../assets/img/profile.png" 
import "./Header.scss"
import  {Basket}  from "../../assets/svg/Basket"


export const Header = () => {
    return (
    <div className="page_header">
        <Link className="Link" to="/products">
            <h3 className="header_title">BeautyHub</h3>
        </Link>
        <Link to="/basket">
             <Basket/>
        </Link>
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