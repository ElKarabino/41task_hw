import { useEffect, useState } from "react"

export const ProductsItem = ({products}) => {
    return (
        <ul className="ProductsList_wrapper">
                {products.map((product) => (
                    <li key={product.id}>
                        <img className="ProductItem_img" src={product.images} alt="product" />
                        <div>
                            {product.title}
                            {product.price}
                            {product.shippingInformation}
                            {product.rating}
                        </div> 
                    </li>
                 ))}
        </ul>
    )
}