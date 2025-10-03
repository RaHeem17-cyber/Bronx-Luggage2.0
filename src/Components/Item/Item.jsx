import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
export const Item = (props) => {
  // Helper to truncate name
  const truncateText = (text, maxLength = 24) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };
  return (
    <div className='item'>
         <Link to={`/product/${props.id}`}><img onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt=''
          className={`item-image${props.small ? ' item-image-small' : ''}`}
        /></Link>
        <p title={props.name}>{truncateText(props.name)}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
export default Item;