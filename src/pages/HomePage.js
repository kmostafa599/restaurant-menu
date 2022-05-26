import React from 'react'
import { Fade } from 'react-bootstrap'
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Navigation from '../components/Navigation'
import Test from '../components/Test'

const HomePage = ({ isOpen, setIsOpen }) => {
    return (

        <div className='h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                <Fade in={true} timeout={3000}>
                    <div>
                        <Header setIsOpen={setIsOpen} />
                        {/* <Test /> */}
                        {/* <Navigation /> */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        </Drawer>
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