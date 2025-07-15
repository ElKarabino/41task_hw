import { useState } from "react"
import { DarkGoogleIcon } from "../../assets/svg/DarkGoogleIcon"
import { LightGoogleIcon } from "../../assets/svg/LightGoogleIcon"
import { CustomButton } from "../CustomButton/CustomButton"
import { CustomInput } from "../CustomInput/CustomInput"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import "./RegistrationForm.scss"


export const RegistrationForm = () => {
    const [isLight , setIsLight] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const writeAccountInfo = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    }
     const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return (
        <div className={`RegistrationForm ${isLight ? 'light' : 'dark'}`}>  
            <div className="RegistrationForm_title_wrapper">
                <h3 className="RegistrationForm_title">Create an account</h3>
                <p className="RegistrationForm_title_descritption">Let’s get started with your 30 days free trial</p>
            </div>
            <div className="RegistrationForm_input_wrapper">
                <CustomInput 
                    placeholder="Name" 
                    isLight={isLight}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <CustomInput 
                    placeholder="Email" 
                    type="email" 
                    isLight={isLight}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput 
                    placeholder="Password" 
                    type="password" 
                    isLight={isLight}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}       
                />
            </div>
            <div className="RegistrationForm_buttons_wrapper">
                <CustomButton 
                    text="Create account" 
                    isLight={isLight}
                    onClick={writeAccountInfo} 
                />
                <CustomButton 
                    icon={isLight ? <LightGoogleIcon /> : <DarkGoogleIcon  />}   
                    text="Sign up with Google" 
                    isLight={isLight}
                    
                /> 
                    
            </div>
            <div className="RegistrationForm_sign_wrapper">
                <p>Already have an account?  
                    <a href=" " className="RegistrationForm_sign_link"> Sign In</a>
                </p>
            </div>
            <ThemeButton 
                toggleTheme={toggleTheme}
                isLight={isLight}    
            />
        </div>
    )
}