import { Link } from 'react-router-dom'
import {  ProductItemButton } from '../ProductItemButton/ProductItemButton'
import './ProductItem.scss'

export const ProductItem = ({product}) => {
    return (
        <li key={product.id} className='ProductItem'>
            <div className='ProductItem_img'>
                <img src={product.images} alt="product" />
            </div>
            <div className='ProductItem_desc'>
                <div className='ProductItem_desc_left'>
                    <p>{product.title}</p>
                    <p>{product.shippingInformation}</p>
                    <p>{product.rating}</p>
                </div>
                <div className='ProductItem_desc_right'>
                    <p>${product.price}</p>
                </div>
            </div> 
            <div className='ProductItem_buttons'>
                <ProductItemButton text="Add To Cart" theme='blue'/>
                <Link key={product.id} to={`/products/${product.id}`} >
                    <ProductItemButton text="Show more" theme='white' />
                </Link>  
            </div>
        </li>
    )
}