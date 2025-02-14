import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const {cartItems,food_list,removeFromCart,getCartTotalAmount,url} = useContext(StoreContext);

  const Navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0){
            return (
            <div className='cart-item-title cart-items-item'>
              <img src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotalAmount()+2}</b>
            </div>
          </div>
          <buttom className="checkout-btn" onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</buttom>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className="cart-pomocode-input">
              <input type="text" placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart