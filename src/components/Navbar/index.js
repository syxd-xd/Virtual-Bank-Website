import React, { useEffect, useState } from 'react'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { FaBars } from '@react-icons/all-files/fa/FaBars'; 
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <>
            <Nav $scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Virtual Bank</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80} activeClass='active'>Signup</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
