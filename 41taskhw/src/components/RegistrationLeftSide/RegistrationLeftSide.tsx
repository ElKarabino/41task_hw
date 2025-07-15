import RegistrationImg from '../../assets/img/registration.jpg'
import "./RegistrationLeftSide.scss"

export const RegistrationLeftSide = () => {
    return (
        <div className='RegistrationLeftSide'>
            <img src={RegistrationImg}  alt="registration" className="RegistrationLeftSide_img"></img>
            <h3 className='RegistrationLeftSide_title'>abc.com</h3>
            <p className='RegistrationLeftSide_description'>abc.com is the best place to find       remote talent. We’ve been super impress by the quality of applicants.           
            </p>
            <div className='RegistrationLeftSide_wrapper'>
                <p className='RegistrationLeftSide_person'>Madhushan Sasanka</p>
                <p className='RegistrationLeftSide_job'>CEO, abc.com</p>
            </div>
        </div>
    )
}