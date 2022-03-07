import React from "react";
import ServicesObject from "./ServiceData";
import {ServicesCard, ServicesContainer, ServicesH1, ServicesH2,
    ServicesIcon, ServicesP, ServicesWrapper} from "./ServicesElements";



export default function Services() {
    
    
    return(
        <ServicesContainer id={"services"}>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {
                    ServicesObject.map((cardInfo) => (
                        <ServicesCard key={cardInfo.key}>
                        <ServicesIcon src={ cardInfo.img.default } />
                        <ServicesH2>{ cardInfo.title }</ServicesH2>
                        <ServicesP>{ cardInfo.description }</ServicesP>
                        </ServicesCard>
                    ))
                }
            </ServicesWrapper>
        </ServicesContainer>
    );
}
 