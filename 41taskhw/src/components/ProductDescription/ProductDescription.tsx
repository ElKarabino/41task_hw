import { useDispatch } from "react-redux"
import { ProductItemButton } from "../ProductItemButton/ProductItemButton"
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { ProductReviews } from "../ProductReviews/ProductReviews"
import "./ProductDescription.scss"
import { openModal } from "../../features/productPopupSlice"

type Review = {
    rating: number,
    comment: string,
    reviewerName: string,
    date: string,
}


type Product = {
    images: string[],
    title: string,
    price: number,
    category: string,
    rating: number,
    description: string,
    reviews: Review[],
}

type ProductDescriptionProps = {
    product: Product,
}

export const ProductDescription = ({product}:ProductDescriptionProps) => {

    const dispatch = useDispatch();

    const handleImageClick = () => {
        if (product?.images?.[0]) {
            dispatch(openModal(product.images[0]));
        }
    };
    return (   
        <div>
            <ProductPopup />
            <div className="ProductDescription_wrapper">
                <div className="ProductDescription_image">
                    <img src={product?.images[0] || ""} alt="img" onClick={handleImageClick}/>
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