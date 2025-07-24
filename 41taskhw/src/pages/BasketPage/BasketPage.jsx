
    import './BasketPage.scss'
    import { BasketContent } from "../../components/BasketContent/BasketContent"
    import { Header } from "../../components/Header/Header"

    export const BasketPage = () => {
        return (
            <div className="BasketPage" >
                <Header/>
                <BasketContent />
                <footer></footer>
            </div>
        )
    }