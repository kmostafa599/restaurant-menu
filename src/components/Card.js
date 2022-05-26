import { Fade } from '@mui/material'
import React from 'react'

const Card = () => {
    return (
        <div >
            <Fade in={true} timeout={3000}>
            <div className='grid grid-rows-3 grid-cols-5 border-2 m-2 rounded-xl h-[150px]'>
                <div className='row-span-3 col-span-2'>
                    {/* <div className=''> */}
                    <img className=' h-full' src="https://img.freepik.com/free-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=740" alt="" />
                
                    {/* </div> */}
                    </div>
                <div className='row-span-2 col-span-3 p-3'>
                    <div className='ml-2 '>
                        <div className='text-2xl'>
                            Burger
                        </div>
                        <div className='text-md text-[#E6034B] font-bold'>
                            $6
                        </div>
                    </div>

                </div>
                <div className='row-span-1 col-span-3 place-self-end mr-2 mb-2 rounded-xl'><button className='border-2 bg-[#E6034B] text-white p-2 rounded-xl'>
                    <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                </button></div>
            </div>

            </Fade>
            
        </div>
    )
}

export default Card