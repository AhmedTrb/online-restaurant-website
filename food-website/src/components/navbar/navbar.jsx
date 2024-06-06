import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './navbar.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const NavBar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home") ;
    const {getCartTotalAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            
            <img src={assets.search_icon} alt='' />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={getCartTotalAmount()>0?"dot":""}></div>
            </div>
            {!token?<button onClick={()=>{setShowLogin(true)}}>Sign in</button>:
            <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li><img src={assets.bag_icon} /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>
            }
            
        </div>
    </div>
  )
}

export default NavBar