import React from 'react'
import Card from '../components/Card'
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Product from '../components/Product'
import Splash from '../components/Splash'

const SplashPage = ({ isOpen, setIsOpen }) => {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <div className='h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <div>
                    <Header setIsOpen={setIsOpen} />
                    <Splash />
                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} setOpenTab={setOpenTab}>
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <div className='divide-y divide-slate-400 b-bottom-2 '>
                                <div className='grid grid-rows-2  '>
                                    <div className=' w-full justify-self-center border-b-2 text-center p-3 text-3xl text-[#575962]'
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                    >
                                        Language (EN)
                                    </div>
                                    <div className='w-full text-center p-3 text-3xl text-[#575962]'>
                                        Give Feedback
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                            <div className=' w-full'>
                                <div className='flex  justify-center align-center border-b-2 text-4xl p-3 hover:text-[#E6034B] mx-4'> {/**Text Color will be applied on the selected language*/}
                                    <div className=''>
                                        English
                                    </div>
                                </div>
                                <div className='flex  justify-center align-center border-b-1 text-4xl p-3 hover:text-[#E6034B]'>
                                    <div className=''>
                                        العربية               </div>
                                </div>

                            </div>
                        </div>


                    </Drawer>
<Card/>
                </div>

                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
    )
}

export default SplashPage