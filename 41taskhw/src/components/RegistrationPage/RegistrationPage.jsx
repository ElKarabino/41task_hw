import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import { RegistrationLeftSide } from "../RegistrationLeftSide/RegistrationLeftSide"
import './RegistrationPage.scss'

export const RegistrationPage = () => {
    return (
        <div className="RegistrationPage">
            <RegistrationLeftSide />
            <RegistrationForm />
        </div>
    )
}