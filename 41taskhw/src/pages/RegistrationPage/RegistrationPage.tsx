import { Link } from "react-router-dom"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm"
import { RegistrationLeftSide } from "../../components/RegistrationLeftSide/RegistrationLeftSide"
import './RegistrationPage.scss'

export const RegistrationPage = () => {
    return (
        <div>
            <Link className="Link" to="/products">Product List</Link>
             <div className="RegistrationPage">
                <RegistrationLeftSide />
                <RegistrationForm />
            </div>
        </div>
       
    )
}