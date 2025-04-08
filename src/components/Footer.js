import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYelp, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2D2D2D;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #e63946;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #f5f5f5;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: 0.3s;
  
  &:hover {
    color: #e63946;
  }
`;

const FooterText = styled.p`
  color: #f5f5f5;
  margin-bottom: 0.6rem;
  line-height: 1.4;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.2rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  
  &:hover {
    background-color: #e63946;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #f5f5f5;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactSectionHeader = styled.h4`
  font-weight: 600;
  margin-top: 18px;
  margin-bottom: 8px;
  color: #f1f1f1;
  font-size: 1rem;
`;

const ContactDivider = styled.hr`
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 15px 0;
  width: 80%;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <SocialIconsContainer>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.yelp.com/biz/x-treme-services-greensboro" target="_blank" rel="noopener noreferrer">
              <FaYelp />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialIcon>
          </SocialIconsContainer>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Services</FooterHeading>
          <FooterLink to="/services">Building Maintenance</FooterLink>
          <FooterLink to="/services">Renovation</FooterLink>
          <FooterLink to="/services">Construction</FooterLink>
          <FooterLink to="/services">Consultation</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>CONTACT</FooterHeading>
          
          <ContactSectionHeader>
            Electrical Services
          </ContactSectionHeader>
          <FooterText>Email: heatherpckd@triad.rr.com</FooterText>
          <FooterText>Phone: (336) 851-0050</FooterText>
          
          <ContactDivider />
          
          <ContactSectionHeader>
            HVAC – Heating & Air
          </ContactSectionHeader>
          <FooterText>Phone: 336.362.9187</FooterText>
          <FooterText>Fax: 336.373.6212</FooterText>
          
          <ContactDivider />
          
          <ContactSectionHeader>
            Location
          </ContactSectionHeader>
          <FooterText>1102 Montpelier Dr, Greensboro, NC 27410</FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        Copyright © {new Date().getFullYear()} · All Rights Reserved · X-treme Services
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;