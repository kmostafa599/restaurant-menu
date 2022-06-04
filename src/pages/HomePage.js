import React from 'react'
import { Fade } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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

        <div className='h-full '>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <Fade in={true} timeout={3000} className='relative'>
                    <div className=''>
                        <Header setIsOpen={setIsOpen} />
                        {/* <Test /> */}
                        <Navigation />
                        {/* <Card/> */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} setOpenTab={setOpenTab}>
                            <DrawerMenu openTab={openTab} setOpenTab={setOpenTab} />
                        </Drawer>

                    </div>
                </Fade>

                <div className='absolute bottom-0 right-0 md:hidden m-2 border-2 rounded-full bg-gray-200 w-[75px] h-[75px]  text-[#e6034b]'>
                    <Link to='/cart'>
                    Cart Icon
                    </Link>
                </div>
                <div className='hidden md:block md:h-full'>
                    <Logo />
                </div>
            </div>

        </div>
    )
}

export default HomePage