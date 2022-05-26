import React from 'react'
import { Fragment } from 'react'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom';
import { Fade } from '@mui/material';
import { Menu, Transition } from '@headlessui/react'

export default function Splash() {
  return (
    <Fade in={true} timeout={3000} >
      <div
        className='	flex flex-col justify-center align-center h-full space-y-8 md:border-r-2'
      >
        <div className='flex justify-center match-content w-auto h-auto'> <div className='w-[100px] h-[100px]'><img src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" alt="logo" /></div> </div>
        <div className='flex justify-center text-[#CCCCCC] text-3xl font-bold'>Restaurant name</div>




        <div className='flex justify-center align-center'>

          <Menu as="div" className=" relative w-full">
            <div className='flex justify-center '>
              <Menu.Button className="w-50 h-[55px] bg-white flex text-sm rounded-full  justify-center items-center relative shadow">
                <span className='left-2 absolute text-2xl p-3'>English</span>
                <div className='right-3 absolute '><svg className='fill-gray-300 w-[50px] h-[36px] hover:fill-gray-500' height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className='relative w-full'>
                    <Menu.Items className="origin-top absolute  mt-[2rem] w-full  rounded-xl  shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item className='border-b-2 text-4xl p-3 hover:text-[#E6034B]'>

                        <div className=''>
                          English
                        </div>
                      </Menu.Item>
                      <Menu.Item className='border-b-1 text-4xl p-3 hover:text-[#E6034B]'>
                        <div className=''>
                          العربية
                        </div>
                      </Menu.Item>

                    </Menu.Items>
                  </div>

                </Transition>
              </Menu.Button>
            </div>

          </Menu>
        </div>

        <div className='flex justify-center  '>
          <Link to='/store' className=' w-[305px] h-full'>
            <button className='text-white w-full h-full text-3xl bg-[#E6034B] p-3 rounded-full hover:bg-[#be123c] '>
              Tab to start
            </button>

          </Link>
        </div>
        <div className='flex justify-center'>
          <button className='text-[#f43f5e] p-3 hover:bg-[#fecaca] underline'>
            <MessageOutlinedIcon color='inherit' />
            Give Feedback
          </button>
        </div>

        <div className='flex justify-center space-x-2.5'>
          <div className='flex justify-center items-center text-white w-[50px] h-[50px]  rounded-full bg-[#E6034B] hover:bg-[#be123c]'>
            <button >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </button>
          </div>

          <div className='flex justify-center items-center text-white w-[50px] h-[50px]  rounded-full bg-[#E6034B] hover:bg-[#be123c]'>
            <button >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </Fade>

  )
}
