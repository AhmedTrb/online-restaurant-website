import React from 'react'
import { useState } from 'react'
import NavBar from './components/navbar/navbar' 
import Footer from './components/footer/footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/placeorder'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App