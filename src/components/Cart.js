import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import Header from './Header';

const Cart = () => {
  return (
    <div className='flex flex-col justify-center items-center align-center space-y-2 bg-[#f9f9f9]  '>
      <Header />

      <div className='h-full  m-5 rounded-3xl divide-y divide-dashed bg-white  '>
        <div className='grid grid-cols-5 grid-rows-3 gap-2  m-2'> {/**card */}
          <div className='col-span-2 row-span-3 p-2'>
            <img className='w-[150px] h-[150px] rounded-xl ' src="https://img.freepik.com/free-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=740" alt="" />
          </div>
          <div className='row-span-2 col-span-3 p-2'>
            <div>
              product name
            </div>
            <div>
              size
            </div>
          </div>
          <div className='p-2'>$12</div>
          <div className='col-span-2 justify-self-end p-2 w-full '>
            <div className='w-[100px] h-[35px] bg-[#E6034B] flex space-x-3 justify-center items-center rounded-full text-white'>
              <div><button><RemoveRoundedIcon  className='fill-gray-900'/></button></div>
              <div><button >1</button></div>
              <div><button><AddRoundedIcon /></button></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 grid-rows-3 gap-2  m-2'> {/**card */}
          <div className='col-span-2 row-span-3 p-2'>
            <img className='w-[150px] h-[150px] rounded-xl ' src="https://img.freepik.com/free-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=740" alt="" />
          </div>
          <div className='row-span-2 col-span-3 p-2'>
            <div>
              product name
            </div>
            <div>
              size
            </div>
          </div>
          <div className='p-2'>$12</div>
          <div className='col-span-2 justify-self-end p-2 w-full '>
            <div className='w-[100px] h-[35px] bg-[#E6034B] flex space-x-3 justify-center items-center rounded-full text-white'>
              <div><button><RemoveRoundedIcon /></button></div>
              <div><button >1</button></div>
              <div><button><AddRoundedIcon /></button></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 grid-rows-3 gap-2  m-2'> {/**card */}
          <div className='col-span-2 row-span-3 p-2'>
            <img className='w-[150px] h-[150px] rounded-xl ' src="https://img.freepik.com/free-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=740" alt="" />
          </div>
          <div className='row-span-2 col-span-3 p-2'>
            <div>
              product name
            </div>
            <div>
              size
            </div>
          </div>
          <div className='p-2'>$12</div>
          <div className='col-span-2 justify-self-end align-self-end p-2 w-full '>
            <div className='w-[100px] h-[35px] bg-[#E6034B] flex space-x-3 justify-center items-center rounded-full text-white'>
              <div><button><RemoveRoundedIcon /></button></div>
              <div><button >1</button></div>
              <div><button><AddRoundedIcon /></button></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Item total</div>
        <div>Dekivery charge</div>
        <div>Tax</div>
      </div>
      <div className='flex'>
        <div>Total</div>
        <div>$36.38</div>
      </div>
      <div className=' bg-[#E6034B] rounded-full w-full text-center h-[50px]' ><button>Checkout</button></div>
    </div>
  )
}

export default Cart