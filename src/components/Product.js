import { height } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


export default function Product() {

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", }}>
      <div className='w-full h-full'>
        <div className=''>
        <Link to='/store'>
          <button  className='w-[40px] h-[40px] z-10 absolute top-5 m-5 bg-white p-3 shadow rounded '>
            <svg className='rotate-180 '  width="16" height="16" viewBox="0 0 24 26" fill="currentColor"  ><path d="M6.92 1c.255 0 .509.138.636.275l10.158 11.157c.381.413.381.964 0 1.377L7.683 24.69c-.381.413-.89.413-1.27 0-.381-.413-.381-.964 0-1.377l9.396-10.192L6.287 2.652c-.381-.413-.381-.964 0-1.378A.932.932 0 016.92 1z" fill="null" stroke="null" stroke-width="0.25"></path>
            </svg>
          </button>
        </Link>
          <img className=' w-full' src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" alt="product_image" /> </div>
      </div>
      <div className='flex flex-col justify-center items-center m-3 '>
        <div className='text-4xl'>product name</div>
        <div className='flex text-xl'>
          <div className='w-[25px] h-[20px] flex items-center '>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M.132 12c0 6.555 5.313 11.868 11.868 11.868 6.555 0 11.868-5.313 11.868-11.868C23.868 5.445 18.555.132 12 .132 5.445.132.132 5.445.132 12zm22.787 0c0 6.03-4.889 10.918-10.919 10.918S1.081 18.03 1.081 12C1.081 5.97 5.97 1.08 12 1.08S22.919 5.97 22.919 12zM6.303 13.424c0-.262.213-.474.475-.474H12V4.88a.475.475 0 11.95 0v9.019H6.778a.475.475 0 01-.475-.475z" fill="null"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 .264C5.518.264.264 5.518.264 12c0 6.482 5.254 11.736 11.736 11.736 6.482 0 11.736-5.254 11.736-11.736C23.736 5.518 18.482.264 12 .264zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm.95 0C.95 5.897 5.896.95 12 .95 18.103.95 23.05 5.896 23.05 12c0 6.103-4.947 11.05-11.05 11.05C5.897 23.05.95 18.103.95 12zM12 1.213C6.043 1.213 1.213 6.043 1.213 12c0 5.957 4.83 10.787 10.787 10.787 5.957 0 10.787-4.83 10.787-10.787 0-5.958-4.83-10.787-10.787-10.787zm.475 3.323a.343.343 0 00-.343.343v8.202H6.778a.343.343 0 000 .686h6.04V4.879a.343.343 0 00-.343-.343zm.606 9.495V4.879a.607.607 0 00-1.213 0v7.939h-5.09a.606.606 0 100 1.213h6.303z" fill="null"></path></svg>

          </div>
                    5 Min
        </div>
        <div className='text-3xl'>icon</div>
        <div className='text-2xl'>description</div>
        <div className='w-full m-3 divide-y divide-slate-200  space-y-5 text-2xl'>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
        </div>
        <div>Add</div>
        <div>required</div>
        <div className='w-full m-3 divide-y divide-slate-200  space-y-5'>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B] font-light'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}
