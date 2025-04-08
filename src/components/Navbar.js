import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import logo from '../images/logo.png'; // Adjust the path as needed

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1); /* Changed to a more transparent white */
  backdrop-filter: blur(10px); /* Glassmorphic blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed position for scrolling */
  width: 100%;
  height: 150px; /* 150px height as requested */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it stays on top */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
`;

const NavContainer = styled.div`
  max-width: 1400px; /* Adjust based on your design */
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Fill the navbar height */
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 250px; /* As requested earlier, 250px wide */
  height: auto; /* Maintain aspect ratio */
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: #000000 !important; /* Force black text with !important */
  margin-left: 3.5rem; /* Increased spacing between items */
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e63946 !important; /* Red color on hover with !important */
  }
  
  &.active {
    color: #000000 !important; /* Black for active state */
    font-weight: 700; /* Make active link bold */
    border-bottom: 2px solid #000000; /* Underline active link */
  }
`;

const PhoneNumber = styled.a`
  background-color: #e63946;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 3.5rem;
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #c1121f;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Navbar = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the home page, go to home page first then scroll
      window.location.href = '/#contact';
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoImage src={logo} alt="X-treme Services Logo" />
        </Logo>
        <NavItems>
          <NavLinkStyled to="/about">About</NavLinkStyled>
          <NavLinkStyled to="/services">Services</NavLinkStyled>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
          <NavLinkStyled to="/news">News</NavLinkStyled>
          <NavLinkStyled as="a" href="#contact" onClick={scrollToContact}>Contact</NavLinkStyled>
          <PhoneNumber href="tel:3368510050">Call Us: (336) 851-0050</PhoneNumber>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;


