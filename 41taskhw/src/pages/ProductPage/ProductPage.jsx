import { Link } from "react-router-dom"
import { ProductsList } from "../../components/ProductsList/ProductsList"

export const ProductPage = () => {
    return (
        <div>
            <header></header>
            <Link className="Link" to="/">Registration Page</Link>
            <ProductsList />
            <footer></footer>
        </div>
    )
}