import React from "react";
import { FaBars } from "react-icons/fa";
import {NavbarContainer, NavbarLogo, Nav, MobileIcon, NavLinks,
    NavMenu, NavItem, NavBtn, NavBtnLink} from "./navbarElements";


export default function Navbar({ toggle }) {



    return(
        <Nav>
            <NavbarContainer>
                <NavbarLogo to={"/"}>dolla</NavbarLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to={"about"}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"discover"}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"services"}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"signup"}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={"/signin"}>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
}
