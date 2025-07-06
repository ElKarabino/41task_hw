import { useEffect, useState } from "react"
import { ProductsItem } from "../ProductsItem/ProductsItem"
import "./ProductsList.scss"
import { Link } from "react-router-dom"

export const ProductsList = () => {
    const [products, setProducts] = useState([])
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
            <Link className="Link" to="/">Registration Page</Link>
            <h2 className="ProductsList_title">Products List</h2>
            <ProductsItem products={products}/>
        </div>
    )
}