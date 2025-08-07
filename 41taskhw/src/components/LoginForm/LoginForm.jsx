import { useEffect, useState } from "react"
import { DarkGoogleIcon } from "../../assets/svg/DarkGoogleIcon"
import { LightGoogleIcon } from "../../assets/svg/LightGoogleIcon"
import { CustomButton } from "../CustomButton/CustomButton"
import { CustomInput } from "../CustomInput/CustomInput"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import "./LoginForm.scss"
import { useDispatch, useSelector } from "react-redux"
import { getLoggedUserThunk, loginThunk } from "../../features/login/loginThunk"
import { useNavigate } from "react-router-dom"
import { selectIsAuth } from "../../features/login/loginSlice"


export const LoginForm = () => {

    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) {
            navigate('/products')
        }
    }, [isAuth])

    const [isLight , setIsLight] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleInputName = (event) => {
       setName(event.target.value)
    }
    const handleInputPassword = (event) => {
       setPassword(event.target.value)
    }
    const handleButton = (event) => {
        event.preventDefault()
        const data = {
            username: name,
            password: password,
        }
        dispatch(loginThunk(data)).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
        dispatch(getLoggedUserThunk());
            }
    });
    }
    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return (
        <div className={`RegistrationForm ${isLight ? 'light' : 'dark'}`}>  
            <div className="RegistrationForm_title_wrapper">
                <h3 className="RegistrationForm_title">Sign in</h3>
                <p className="RegistrationForm_title_descritption">Let’s get started with your 30 days free trial</p>
            </div>
            <div className="RegistrationForm_input_wrapper">
                <CustomInput 
                    placeholder="Name" 
                    isLight={isLight}
                    value={name}
                    onChange={handleInputName}
                />
                <CustomInput 
                    placeholder="Password" 
                    type="password" 
                    isLight={isLight}
                    value={password}
                    onChange={handleInputPassword}       
                />
            </div>
            <div className="RegistrationForm_buttons_wrapper">
                <CustomButton 
                    icon={isLight ? <LightGoogleIcon /> : <DarkGoogleIcon  />}   
                    text="Sign in" 
                    isLight={isLight}
                    onClick={handleButton}
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