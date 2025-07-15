import { Link } from "react-router-dom"
import { ProductsList } from "../../components/ProductsList/ProductsList"
import "./ProductPage.scss"
import { Header } from "../../components/Header/Header"

export const ProductPage = () => {
    return (
        <div>
            <Header />
            <ProductsList />
            <footer></footer>
        </div>
    )
}