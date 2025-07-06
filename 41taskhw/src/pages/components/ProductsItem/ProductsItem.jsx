import {  ProductsItemButton } from '../ProductsItemButton/ProductsItemButton'
import './ProductsItem.scss'

export const ProductsItem = ({products}) => {
    return (
        <ul className="ProductsList_wrapper">
                {products.map((product) => (
                    <li key={product.id} className='ProductsItem'>
                        <div className='ProductsItem_img'>
                            <img src={product.images} alt="product" />
                        </div>
                        <div className='ProductsItem_desc'>
                            <div className='ProductsItem_desc_left'>
                                <p>{product.title}</p>
                                <p>{product.shippingInformation}</p>
                                <p>{product.rating}</p>
                            </div>
                            <div className='ProductsItem_desc_right'>
                                <p>${product.price}</p>
                            </div>
                        </div> 
                        <div className='ProductItem_buttons'>
                            <ProductsItemButton text="Add To Cart" theme='blue'/>
                            <ProductsItemButton text="Show more" theme='white'/>
                        </div>
                    </li>
                 ))}
        </ul>
    )
}