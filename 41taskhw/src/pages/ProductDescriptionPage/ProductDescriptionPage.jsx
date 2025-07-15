import { Link, useNavigate, useParams } from "react-router-dom"
import { ProductDescription } from "../../components/ProductDescription/ProductDescription"
import { useEffect, useState } from "react";
import "./ProductDescriptionPage.scss"

import { Header } from "../../components/Header/Header";

export const ProductDescriptionPage = () => {   
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if(Number(id)) {
            fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
        } else {
            navigate('/')
        }
    },[id])
    return (
        <div>
            <Header />
            <ProductDescription product={product}/>
            <footer></footer>
        </div>
    )
}