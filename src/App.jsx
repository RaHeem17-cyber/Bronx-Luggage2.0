import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import women_banner  from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import men_banner from './Components/Assets/banner_mens.png';
import AllProducts from './Pages/AllProducts/AllProducts';
import Checkout from './Pages/Checkout/Checkout';
import Newsletter from './Pages/Newsletter/Newsletter';
import NewCollections from './Components/NewCollections/NewCollections'
function App() {


  return (
   <BrowserRouter>

      <Navbar />

      <Routes>
        
        <Route path='/' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login-signup' element={<LoginSignup />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='*' element={<LoginSignup />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner}category="women"/>}/>
         <Route path='/accessorys' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/cart' element={<Cart/>} />
          <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
        
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/new-collection' element={<NewCollections />} />
        </Routes> 
        <Footer/> 
   </BrowserRouter>
  )
}

export default App
