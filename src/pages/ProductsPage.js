import React from 'react'
import Logo from '../components/Logo'
import Product from '../components/Product'

const ProductsPage = () => {
  return (
    <div className='h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <div>
                    <Product/>
                </div>

                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
  )
}

export default ProductsPage