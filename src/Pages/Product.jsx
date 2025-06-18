import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'; // Import your ProductDisplay component
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
export const Product = () => {

  const{all_product} = useContext(ShopContext);
  const {  productId } = useParams(); // Assuming you're using react-router-dom for routing
  const product = all_product.find((e)=> e.id === Number(productId)); // Find the product by ID  
  // Assuming you want to display a specific product, you might need to get the product ID from the URL or context
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
