import React from 'react'

const DrawerMenu = ({ openTab, setOpenTab }) => {
    return (
        <div>
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
        </div>
    )
}

export default DrawerMenu