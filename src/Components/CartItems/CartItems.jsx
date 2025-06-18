import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom' // <-- Add this import

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext)
  const navigate = useNavigate(); // <-- Add this line

  // Calculate subtotal
  const subtotal = all_product.reduce((acc, item) => {
    return acc + (cartItems[item.id] > 0 ? item.new_price * cartItems[item.id] : 0)
  }, 0)

  // You can add shipping or other fees if needed
  const shippingFee = 0
  const total = subtotal + shippingFee

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>  Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>
           <button onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code ' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}