import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/productPopupSlice";
import "./ProductPopup.scss"

export const ProductPopup = () => {
    const { isOpen, imageUrl } = useSelector((state) => state.productPopup);
    const dispatch = useDispatch();
    if (!isOpen || !imageUrl) return null;
    return (
        <div 
        className="ProductPopup" >
            <div className="ProductPopup_content">
                <img 
                    alt="product" 
                    src={imageUrl}
                    />
                <div 
                    className="ProductPopup_close_button"
                    onClick={() => dispatch(closeModal()) }
                >
                    <span className="first_close_line"></span>
                    <span className="second_close_line"></span>
                </div>
            </div>
        </div>
    )
}