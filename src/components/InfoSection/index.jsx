import React from "react";
import { Button } from "../ButtonElements";
import {InfoContainer, InfoRow, Column1, TextWrapper, TopLine,
Heading, Subtitle, BtnWrap, Column2, Img, ImgWrap, InfoWrapper} from "./infoElement";


export default function Info(
    { id, lightBg, lightText, topLine, headline, description, buttonLabel, imgStart, img,
        primary, dark, dark2, alt, darkText}
    ) {


    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{ topLine }</TopLine>
                            <Heading lightText={ lightText }>{ headline }</Heading>
                            <Subtitle darkText={ darkText }>{ description }</Subtitle>
                            <BtnWrap>
                                <Button to={"home"} primary={primary ? 1 : 0} dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0} smooth={true} duration={500}
                                        spy={true} exact={true.toString()} offset={-80}>
                                    { buttonLabel }
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
}
