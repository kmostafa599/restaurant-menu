import React from 'react'
// import Card from '../components/Card'
import Drawer from '../components/Drawer'
import DrawerMenu from '../components/DrawerMenu'
import Header from '../components/Header'
import Logo from '../components/Logo'
// import Product from '../components/Product'
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
                        <DrawerMenu openTab={openTab} setOpenTab={setOpenTab}/>
                    </Drawer>
                </div>

                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
    )
}

export default SplashPage