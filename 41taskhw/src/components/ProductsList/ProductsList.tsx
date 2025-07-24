import { useEffect } from "react"
import "./ProductsList.scss"
import { ProductItem } from "../ProductItem/ProductItem"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../features/products/storeThunk"
import {Product} from '../../types/product'

export const ProductsList = () => {
    const dispatch: any= useDispatch();
    const products:Product[] = useSelector((state:any)=> state.products.productList|| [])
    
    useEffect(() => {
        dispatch(getProducts());
  }, [dispatch])
    return (
        <div>
            <h2 className="ProductsList_title">Product List</h2>
            <ul className="ProductsList_wrapper">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}