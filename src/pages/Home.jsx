import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeorSection";
import Info from "../components/InfoSection";
import {homeObjectOne, homeObjectThree, homeObjectTwo} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";


export default function Home() {

    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => {
        SetIsOpen(!isOpen);
    }
    
    return(
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
            <HeroSection />
            <Info {...homeObjectOne } />
            <Info {...homeObjectTwo } />
            <Services />
            <Info {...homeObjectThree } />
            <Footer />
        </>
    );
}
 