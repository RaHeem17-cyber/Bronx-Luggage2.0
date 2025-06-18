import React from 'react';
import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter-page">
    <h1>Subscribe to Our Newsletter</h1>
    <p>Get the latest updates, offers, and news directly in your inbox!</p>
    <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
);

export default Newsletter;