import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div class="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-contant-left">
                <img src={assets.logo} alt="logo" className="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolorem ut dolores incidunt aspernatur modi.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+216 87 456 789</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyrights">© 2022.Tomato All rights reserved</p>
    </div>
  )
}

export default Footer