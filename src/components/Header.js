import {  React } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';



export default function Header({ setIsOpen }) {
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location)
  
  return (
    <div className={`flex  ${location.pathname === '/store' ? 'justify-between' : 'justify-end'} p-3 md:border-r-2`}>
      {location.pathname === '/store' || location.pathname === '/cart' ?
        <div>
          {/* <Link to='/' > */}
            <button onClick={()=>navigate(-1)} className='rounded pointer p-3 shadow'>
              <svg className='rotate-180 fill-gray-900' width="16" height="16" viewBox="0 0 24 26" fill="currentColor"  ><path d="M6.92 1c.255 0 .509.138.636.275l10.158 11.157c.381.413.381.964 0 1.377L7.683 24.69c-.381.413-.89.413-1.27 0-.381-.413-.381-.964 0-1.377l9.396-10.192L6.287 2.652c-.381-.413-.381-.964 0-1.378A.932.932 0 016.92 1z" fill="null" stroke="null" stroke-width="0.25"></path>
              </svg>
            </button>
          {/* </Link> */}


        </div> : null}
      {location.pathname === '/store' ?

        <div className='flex items-center justify-center '>

          <div className='w-[63px] h-[63px] '>
            <img src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" alt="logo" />

          </div>
        </div> : null}
      <button className='  rounded pointer p-3 shadow ' onClick={() => setIsOpen(true)}
      >
        <svg width="16" height="16" viewBox="0 0 24 26" fill="#575962"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.59C0 4.989.488 4.5 1.09 4.5h21.82a1.09 1.09 0 110 2.182H1.09A1.09 1.09 0 010 5.59zM0 12.136c0-.602.488-1.09 1.09-1.09h21.82a1.09 1.09 0 110 2.181H1.09A1.09 1.09 0 010 12.137zM10.91 18.682c0-.603.488-1.091 1.09-1.091h10.91a1.09 1.09 0 110 2.182H12a1.09 1.09 0 01-1.09-1.091z" fill="null" ></path>
        </svg>
      </button>

    </div>
  )
}
