import React from 'react'
import Cart from '../components/Cart'
import Logo from '../components/Logo'

const CartPage = () => {
  return (
    <div className='min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div >
                    <Cart />
                </div>

                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
  )
}

export default CartPage