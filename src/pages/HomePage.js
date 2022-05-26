import React from 'react'
import { Fade } from 'react-bootstrap'
import Card from '../components/Card'
import Drawer from '../components/Drawer'
import DrawerMenu from '../components/DrawerMenu'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Test from '../components/Test'

const HomePage = ({ isOpen, setIsOpen }) => {
    const [openTab, setOpenTab] = React.useState(1);

    return (

        <div className='h-full relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <Fade in={true} timeout={3000}>
                    <div >
                        <Header setIsOpen={setIsOpen} />
                        {/* <Test /> */}
                        <Navigation />
                        {/* <Card/> */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} setOpenTab={setOpenTab}>
                            <DrawerMenu openTab={openTab} setOpenTab={setOpenTab}/>
                        </Drawer>
                        {/* <div className='sticky-bottom-0 bottom-0 right-0 fixed md:'>
Cart Icon
                        </div> */}
                    </div>
                </Fade>


                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
    )
}

export default HomePage