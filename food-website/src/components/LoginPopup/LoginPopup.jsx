import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"


const LoginPopup = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("Sign up");
  const {url,setToken} = useContext(StoreContext);

  const [data,setData] =useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name ;
    const value = event.target.value ;

    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event)=>{
    event.preventDefault();
    let newURL = url ;
    if (currState==="Login"){
      newURL+="/api/user/login";
    } else newURL+="/api/user/register" ;

    const response = await axios.post(newURL,data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState==="Login"?<></>:<input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder='your name' required/>}
          <input type='email' name="email" onChange={onChangeHandler} value={data.email} placeholder='email@gmail.com' required />
          <input type='password' name="password" onChange={onChangeHandler} value={data.password} placeholder='your password' required />
          <button type="submit">{currState==="Sign up"?"Create account":"Sign up"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing,I agree to the terms of use & privacy policy</p>
          </div>
          {currState==="Login"
          ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
          <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Sign in here</span></p>
          }
          
        </div>
      </form>
    </div>
  )
}

export default LoginPopup