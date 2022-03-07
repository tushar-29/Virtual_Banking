import React from "react";
import {
    FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons,
    SocialLogo, SocialMedia, SocialMediaWrapper, SocialRights
} from "./FooterElements";
import {FaFacebook,FaInstagram,FaTwitter, FaYoutube} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";


export default function Footer() {

    const year = new Date().getFullYear();
    
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to={"/signin"}>How it works</FooterLink>
                            <FooterLink to={"/signin"}>Testimonials</FooterLink>
                            <FooterLink to={"/signin"}>Careers</FooterLink>
                            <FooterLink to={"/signin"}>Invester</FooterLink>
                            <FooterLink to={"/signin"}>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to={"/signin"}>Submit Video</FooterLink>
                            <FooterLink to={"/signin"}>Ambassadors</FooterLink>
                            <FooterLink to={"/signin"}>Agency</FooterLink>
                            <FooterLink to={"/signin"}>Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to={"/signin"}>Contact</FooterLink>
                            <FooterLink to={"/signin"}>Support</FooterLink>
                            <FooterLink to={"/signin"}>Destinations</FooterLink>
                            <FooterLink to={"/signin"}>Sponsorships</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Branchs</FooterLinkTitle>
                            <FooterLink to={"/signin"}>Delhi</FooterLink>
                            <FooterLink to={"/signin"}>Mumbai</FooterLink>
                            <FooterLink to={"/signin"}>Bangalore</FooterLink>
                            <FooterLink to={"/signin"}>Kolkata</FooterLink>
                            <FooterLink to={"/signin"}>Chennai</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to={'/'}>dolla</SocialLogo>
                        <SocialRights>dolla © {year} All rights reserved.</SocialRights>
                        <SocialIcons>
                            <SocialIconLink herf={"/"} target={'_blank'} arial-label={"Facebook"}>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink herf={"/"} target={'_blank'} arial-label={"Instagram"}>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink herf={"/"} target={'_blank'} arial-label={"Twitter"}>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink herf={"/"} target={'_blank'} arial-label={"Youtube"}>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink herf={"/"} target={'_blank'} arial-label={"Gmail"}>
                                <AiFillMail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}
 