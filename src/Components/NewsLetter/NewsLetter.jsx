import React from 'react'
import './NewsLetter.css'
import { useNavigate } from 'react-router-dom';


export const NewsLetter = () => {
   const navigate = useNavigate();
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email </h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button onClick={() => navigate('/newsletter')}>
      Subscribe
    </button>
        </div>
    </div>
  )
}
export default NewsLetter;