import React, { useContext, useState } from 'react';
import './Checkout.css';
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { all_product, cartItems } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((acc, item) => (
    acc + (cartItems[item.id] > 0 ? item.new_price * cartItems[item.id] : 0)
  ), 0);
  const shippingFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  // Simple form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    payment: 'card'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Order placed! (Demo)');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" required value={form.address} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" required value={form.city} onChange={handleChange} />
          <input type="text" name="zip" placeholder="ZIP / Postal Code" required value={form.zip} onChange={handleChange} />
          <input type="text" name="country" placeholder="Country" required value={form.country} onChange={handleChange} />

          <h2>Payment Method</h2>
          <div className="checkout-payment">
            <label>
              <input type="radio" name="payment" value="card" checked={form.payment === 'card'} onChange={handleChange} />
              Credit/Debit Card
            </label>
            <label>
              <input type="radio" name="payment" value="paypal" checked={form.payment === 'paypal'} onChange={handleChange} />
              PayPal
            </label>
          </div>
          <button type="submit" className="checkout-btn">Place Order</button>
        </form>
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="checkout-summary-list">
            {all_product.filter(item => cartItems[item.id] > 0).map(item => (
              <div className="checkout-summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>Qty: {cartItems[item.id]}</span>
                </div>
                <p>${(item.new_price * cartItems[item.id]).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="checkout-summary-total">
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</span>
            </div>
            <div className="checkout-summary-grand">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;