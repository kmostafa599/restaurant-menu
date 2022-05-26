import React from 'react'

const Drawer = ({ children, isOpen, setIsOpen, setOpenTab }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="felx justify-end items-end p-4 font-bold text-lg "><button className='bg-white shadow-lg p-3 ' onClick={() => {
            setOpenTab(1)
          setIsOpen(false);
        }}><svg width="16" height="16" viewBox="0 0 24 24" fill="#575962"><g clip-path="url(#icon-close_svg__clip0)" fill="null"><path d="M1.24 24a1.235 1.235 0 01-.872-2.108L21.898.362a1.235 1.235 0 111.746 1.746l-21.53 21.53c-.242.24-.558.362-.874.362z"></path><path d="M22.771 24c-.316 0-.631-.12-.872-.362L.368 2.108A1.235 1.235 0 012.114.362l21.53 21.53A1.235 1.235 0 0122.772 24z"></path></g><defs><clipPath id="icon-close_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg></button></header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setOpenTab(1)
          setIsOpen(false);
        }}
      ></section>
    </main>
  )
}

export default Drawer