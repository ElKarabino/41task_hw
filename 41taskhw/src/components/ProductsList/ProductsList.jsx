import { useEffect } from "react"
import "./ProductsList.scss"
import { ProductItem } from "../ProductItem/ProductItem"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../features/products/storeThunk"

export const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products.productList)
    
    useEffect(() => {
        dispatch(getProducts());
  }, [dispatch])
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