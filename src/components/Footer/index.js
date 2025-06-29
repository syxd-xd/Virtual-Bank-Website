import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from "./FooterElements"
import { animateScroll as scroll } from 'react-scroll'
const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/"> How it works </FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers</FooterLink>
                            <FooterLink to="/"> Investors</FooterLink>
                            <FooterLink to="/"> Terms of service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/"> Contact </FooterLink>
                            <FooterLink to="/"> Support </FooterLink>
                            <FooterLink to="/"> Destinations</FooterLink>
                            <FooterLink to="/"> Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to="/"> Submit Video </FooterLink>
                            <FooterLink to="/"> Ambassadors </FooterLink>
                            <FooterLink to="/"> Agency</FooterLink>
                            <FooterLink to="/"> Influence</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to="/"> Instagram </FooterLink>
                            <FooterLink to="/"> Facebook </FooterLink>
                            <FooterLink to="/"> Youtube </FooterLink>
                            <FooterLink to="/"> X (Twitter) </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >
                            Virtual Bank
                        </SocialLogo>
                        <WebsiteRights>Virtual Bank © {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='www.youtube.com' target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="X">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
