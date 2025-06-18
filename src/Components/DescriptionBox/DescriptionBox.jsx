import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <h1>Product Description</h1>
     <p>
      Discover the perfect blend of style and functionality with our premium bags. Designed for everyday use, travel, or special occasions, each bag is crafted from high-quality materials to ensure durability and comfort.
      With spacious compartments, secure closures, and modern designs, our bags help you stay organized while complementing your personal style.
      Whether you’re heading to work, school, or an adventure, this bag is your ideal companion.
      <br /><br />
      Our collection features a variety of colors and sizes to suit your needs. Each bag is lightweight yet sturdy, offering ample space for your essentials without compromising on aesthetics. Adjustable straps and ergonomic handles provide maximum comfort, 
      while water-resistant fabrics keep your belongings safe in any weather.
      <br /><br />
      Shop with confidence and elevate your everyday look with a bag that’s as versatile as you are. 
      Experience quality, convenience, and style—all in one.
    </p>
        </div>      
    </div>
  )
}
export default DescriptionBox;