import { ProductItemButton } from "../ProductItemButton/ProductItemButton"

export const ProductDescription = ({product}) => {
    return (
        <div className="ProductDescription_wrapper">
            <div className="ProductDescription_image">
                <img src={product?.images[0] || null} alt="img"/>
            </div>
            <div>
                <h2>{product?.title}</h2>
                <div>
                    <p>${product?.price}</p>
                    <p>{product?.category}</p>
                    <p>{product?.rating}</p>
                </div>
            </div>
            <div>
                <p>Description:</p>
                <p>{product.description}</p>
            </div>
            <ProductItemButton text="Add To Cart" theme='blue'/>
        </div>
    )
}