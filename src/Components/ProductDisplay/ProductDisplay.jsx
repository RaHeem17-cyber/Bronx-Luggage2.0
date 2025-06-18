import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";
import { use } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : '');

    // Example color options if not provided in product
    const colorOptions = product.colors || ['#171717', '#e63946', '#457b9d'];

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A bag is a practical accessory designed to carry personal items, essentials, or
                    belongings. Bags come in various styles, sizes, and materials, including backpacks, handbags, duffel bags, and travel luggage.
                    They combine functionality with fashion, making them ideal for everyday use, travel, work, or special occasions.
                </div>
                <div className="productdisplay-right-size">
                    <h2>Select Quantity</h2>
                    <div className="productdisplay-quantity-color">
                        <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={e => setQuantity(Number(e.target.value))}
                            className="productdisplay-quantity-input"
                        />
                        <div className="productdisplay-color-options">
                            {colorOptions.map((color, idx) => (
                                <span
                                    key={color}
                                    className={`productdisplay-color-circle${selectedColor === color ? ' selected' : ''}`}
                                    style={{ background: color }}
                                    onClick={() => setSelectedColor(color)}
                                    title={color}
                                />
                            ))}
                        </div>
                          <button onClick={()=>{addToCart(product.id)}} className="productdisplay-addtocart-btn">
                                  Add to Cart
                        </button>

                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default ProductDisplay;