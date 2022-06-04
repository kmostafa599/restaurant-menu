import React from 'react'
import Logo from '../components/Logo'
import Product from '../components/Product'
import ProductDetails from '../components/ProductDetails'

const ProductsPage = () => {
  return (
    <div className='min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <div>
                    {/* <Product/> */}
                    <ProductDetails/>
                </div>

                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
  )
}

export default ProductsPage