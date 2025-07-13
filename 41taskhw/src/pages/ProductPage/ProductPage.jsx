import { Link } from "react-router-dom"
import { ProductsList } from "../../components/ProductsList/ProductsList"
import "./ProductPage.scss"
import ProfileImg from "../../assets/img/profile.png"

export const ProductPage = () => {
    return (
        <div>
            <header className="page_header">
                <Link className="Link" to="/products">
                    <h3 className="header_title">BeautyHub</h3>
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
            </header>
            <ProductsList />
            <footer></footer>
        </div>
    )
}