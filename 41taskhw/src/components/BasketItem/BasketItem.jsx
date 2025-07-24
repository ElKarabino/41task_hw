import "./BasketItem.scss"

export const BasketItem = ({product}) => {
    return (
        <li className="BasketItem">
            <div className='ProductItem_img'>
                <img src={product.images || ""} alt="product"  />
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
        </li>
    )
}