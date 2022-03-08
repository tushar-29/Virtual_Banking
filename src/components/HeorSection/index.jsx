import React, {useState} from "react";
import {ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper,
    HeroContainer, HeroContent, HeroH1, HeroP, VideoBg} from "./HeroElement";
import {Button} from "../ButtonElements";
import Video from "../../videos/video.mp4";


export default function HeroSection() {
    
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg loop autoPlay muted src={Video} type={"/video/mp4"} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for new account today and receive $250
                    in credit towards your next  payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to={"signup"} onMouseEnter={onHover} onMouseLeave={onHover}
                    primary={true.toString()} dark={true.toString()}
                    smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                        Get started { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    );
}
 