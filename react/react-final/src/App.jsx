import Top from './components/Top/Top'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Products from './components/Products/Products'
import './App.css'

import { Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <>
    <div className="preload">
    <Top/>
    <Header/>
    <main> 
      <Routes>
      {/* Rota individual que pretendemos criar*/}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </main>
    <Footer/>
    <script src="js/script.js"></script>
    </div>
    </>
  )
}

export default App
