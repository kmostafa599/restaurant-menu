import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Product from './components/Product'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SplashPage from './pages/SplashPage'

const MyRoutes = () => {
    const [isOpen,setIsOpen] = useState()

    return (
        <Routes>
            <Route path='/' element={<SplashPage isOpen={isOpen} setIsOpen={setIsOpen} />} />
            <Route path='/store' element={<HomePage isOpen={isOpen} setIsOpen={setIsOpen}  />} />
            <Route path='/product' element={<ProductsPage />} />
        </Routes>)
}

export default MyRoutes