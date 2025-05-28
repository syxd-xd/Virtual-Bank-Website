import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Navbar/Sidebar'
import HeroSection from '../components/Navbar/HeroSection'
import InfoSection from '../components/Navbar/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Navbar/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home 
