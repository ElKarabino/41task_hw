import { Link } from "react-router-dom"
import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import { RegistrationLeftSide } from "../RegistrationLeftSide/RegistrationLeftSide"
import './RegistrationPage.scss'

export const RegistrationPage = () => {
    return (
        <div>
            <Link className="Link" to="/ProductPage">Product List</Link>
             <div className="RegistrationPage">
                <RegistrationLeftSide />
                <RegistrationForm />
            </div>
        </div>
       
    )
}