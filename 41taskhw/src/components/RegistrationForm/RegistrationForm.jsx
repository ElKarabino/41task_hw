import { GoogleIcon } from "../../assets/svg/GoogleIcon"
import { CustomButton } from "../CustomButton/CustomButton"
import { CustomInput } from "../CustomInput/CustomInput"
import "./RegistrationForm.scss"

export const RegistrationForm = () => {
    return (
        <div className="RegistrationForm">  
            <div className="RegistrationForm_title_wrapper">
                <h3 className="RegistrationForm_title">Create an account</h3>
                <p className="RegistrationForm_title_descritption">Let’s get started with your 30 days free trial</p>
            </div>
            <div className="RegistrationForm_input_wrapper">
                <CustomInput placeholder="Name"/>
                <CustomInput placeholder="Email" type="email" />
                <CustomInput placeholder="Password" type="password"/>
            </div>
            <div className="RegistrationForm_buttons_wrapper">
                <CustomButton text="Create account" theme="light"/>
                <CustomButton icon={<GoogleIcon/>}  text="Sign up with Google" theme="dark"/>
            </div>
            <div className="RegistrationForm_sign_wrapper">
                <p>Already have an account?  
                    <a href=" " className="RegistrationForm_sign_link"> Sign In</a>
                </p>
            </div>
        </div>
    )
}