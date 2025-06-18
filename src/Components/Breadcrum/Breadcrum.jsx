import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const {product} = props;
    // Assuming you want to display the product name in the breadcrumb
  return (
   <div className="breadcrum">
  <a href="/">Home</a>
  <span className="breadcrum-separator">/</span>
    <a href="/">Shop</a>
  <span className="breadcrum-separator">/</span>
  <a href="/mens">Men</a>
  <span className="breadcrum-separator">/</span>
    <a href="/womens">Women</a>
  <span className="breadcrum-separator">/</span>

</div>
  )
}
