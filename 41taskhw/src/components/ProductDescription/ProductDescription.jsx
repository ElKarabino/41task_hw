import { ProductItemButton } from "../ProductItemButton/ProductItemButton"
import { ProductReviews } from "../ProductReviews/ProductReviews"
import "./ProductDescription.scss"

export const ProductDescription = ({product}) => {
    return (   
        <div>
            <div className="ProductDescription_wrapper">
                <div className="ProductDescription_image">
                    <img src={product?.images[0] || null} alt="img"/>
                </div>
                <div>
                    <div className="ProductDescription_title">
                        <h3>{product?.title}</h3>
                        <div className="ProductDescription_title_bottom">
                            <p>${product?.price}</p>
                            <p>{product?.category}</p>
                            <p>{product?.rating}</p>
                        </div>
                    </div>
                    <div>
                        <p>Description:</p>
                        <p>{product?.description}</p>
                    </div>
                    <ProductItemButton text="Add To Cart" theme='blue'/>
                </div>
            </div>
            <ProductReviews reviews={product?.reviews}/>
        </div>
    )
}