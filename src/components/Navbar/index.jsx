import React, {useEffect, useState} from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {NavbarContainer, NavbarLogo, Nav, MobileIcon, NavLinks,
    NavMenu, NavItem, NavBtn, NavBtnLink} from "./navbarElements";
import { animateScroll } from "react-scroll";


export default function Navbar({ toggle }) {

    const [scrollNav, setScrollNav] = useState(false);


    const changeNav = () => {
        if(window.scrollY >= 100)
            setScrollNav(true);
        else
            setScrollNav(false);
    }

    const toggleHome = () => {
        animateScroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return(
        <IconContext.Provider value={{}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavbarLogo to={"/"} onClick={toggleHome}>dolla</NavbarLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to={"about"} smooth={true} duration={500}
                                  spy={true} exact={true} offset={-80}>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"discover"} smooth={true} duration={500}
                                  spy={true} exact={true} offset={-80}>
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"services"} smooth={true} duration={500}
                                  spy={true} exact={true} offset={-80}
                                  // activeClass={"active"} create active class for edition
                        >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"signup"} smooth={true} duration={500}
                                  spy={true} exact={true} offset={-80}>
                            Sign Up
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={"/signin"}>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    );
}
