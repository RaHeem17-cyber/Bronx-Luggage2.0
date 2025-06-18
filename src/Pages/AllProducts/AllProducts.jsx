import React from 'react';
import './AllProducts.css';
import all_product from '../../Components/Assets/all_product';
import Item from '../../Components/Item/Item';

const AllProducts = () => {
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="allproducts-list">
        {all_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;