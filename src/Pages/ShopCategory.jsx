import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 12;
  // Filter products by category
  const filteredProducts = all_product.filter(item => item.category === props.category);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  return (
    <div className='shop-category'>
      <div className="shop-category-banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {startIdx + 1}-{Math.min(endIdx, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {paginatedProducts.map((item, i) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="shopcategory-pagination">
        <button
          className="shopcategory-page-btn"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={`shopcategory-page-btn${currentPage === idx + 1 ? ' active' : ''}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="shopcategory-page-btn"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default ShopCategory;