import { useNavigate, useParams } from "react-router-dom"
import { ProductDescription } from "../../components/ProductDescription/ProductDescription"
import { useEffect, useState } from "react";
import "./ProductDescriptionPage.scss"
import { Header } from "../../components/Header/Header";
import { getProductDesc } from "../../features/products/storeThunk";
import { useDispatch, useSelector } from "react-redux";


export const ProductDescriptionPage = () => {   
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.productDesc);
    useEffect(() => {
        if (id) {
            dispatch(getProductDesc(id))}
    }, [dispatch, id]);
    return (
        <div>
            <Header />
            {product && <ProductDescription product={product} />}
            <footer></footer>
        </div>
    )
}