import { Link, useNavigate, useParams } from "react-router-dom"
import { ProductDescription } from "../../components/ProductDescription/ProductDescription"
import { useEffect, useState } from "react";
import "./ProductDescriptionPage.scss"
import ProfileImg from "../../assets/img/profile.png"

export const ProductDescriptionPage = () => {   
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if(Number(id)) {
            fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
        } else {
            navigate('/')
        }
    },[id])
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
            <ProductDescription product={product}/>
            <footer></footer>
        </div>
    )
}