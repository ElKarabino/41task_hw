import { useEffect, useState } from "react"
import "./ProductsList.scss"
import { ProductItem } from "../ProductItem/ProductItem"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: number,
    images: string,
    shippingInformation: string,
}

export const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5')
        .then(res => res.json())
        .then((response) => {
            console.log(response.products)
            setProducts(response.products)
        })
    }, [])
    return (
        <div>
            <h2 className="ProductsList_title">Products List</h2>
            <ul className="ProductsList_wrapper">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}