//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'

import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Products from './components/Products/Products'

import { Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <>
      
    <Routes>
     {/* Rota individual que pretendemos criar*/}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </>
  )
}

export default App
