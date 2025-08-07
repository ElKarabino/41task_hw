import { Link } from "react-router-dom"
import ProfileImg from "../../assets/img/profile.png" 
import "./Header.scss"
import  {Basket}  from "../../assets/svg/Basket"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectIsAuth, selectUser } from "../../features/login/loginSlice"
import { Logout } from "../../assets/svg/Logout"


export const Header = () => {
    const user = useSelector(selectUser)
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("Logout")
        dispatch(logout())
    }

    return (
    <div className="page_header">
        <Link className="Link" to="/products">
            <h3 className="header_title">BeautyHub</h3>
        </Link>
        <Link to="/basket">
             <Basket/>
        </Link>
        <Link className="Link" to="/">
            <div className="page_header_profile">
                <div className="page_header_img">
                    <img src={user?.image || ProfileImg} alt="profile" />
                </div>
                <div className="page_header_text">
                    <p>Good Morning</p>
                    <h4>{user?.firstName || 'Unknown'} {user?.lastName || 'Unknown'}</h4>
                </div>
            </div>
        </Link>
        <Logout onClick={handleLogout}/>
    </div>
    )
}