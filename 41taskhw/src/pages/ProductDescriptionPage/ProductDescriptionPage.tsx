import { useNavigate, useParams } from "react-router-dom"
import { ProductDescription } from "../../components/ProductDescription/ProductDescription"
import { useEffect, useState } from "react";
import "./ProductDescriptionPage.scss"
import { Header } from "../../components/Header/Header";

type Review = {
    rating: number,
    comment: string,
    reviewerName: string,
    date: string,
}


type Product = {
    images: string[],
    title: string,
    price: number,
    category: string,
    rating: number,
    description: string,
    reviews: Review[],
}

export const ProductDescriptionPage = () => {   
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
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
    },[id, navigate])
    return (
        <div>
            <Header />
            {product && <ProductDescription product={product} />}
            <footer></footer>
        </div>
    )
}