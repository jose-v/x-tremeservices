import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; // Reduced gap between items by ~20px
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLinkStyled = styled(NavLink)`
  color: #000000 !important;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e63946 !important;
  }
  
  &.active {
    color: #000000 !important;
    font-weight: 700;
    border-bottom: 2px solid #000000;
  }
`;

const PhoneNumber = styled.a`  background-color: #e63946;
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
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (e) => {
    e.preventDefault();
    
    // Check if we are already on the homepage
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add a small delay to adjust for the navbar height
        setTimeout(() => {
          window.scrollBy(0, -150); // Adjust for navbar height
        }, 100); // Delay might need adjustment based on scroll speed
      }
    } else {
      // If not on the homepage, navigate there first with the hash
      navigate('/#contact-form');
      // Scroll might not happen automatically after navigation, 
      // needs handling on the Home page potentially or a different approach.
      // For now, this navigates to the homepage hash.
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoImage src={logo} alt="X-treme Services Logo" />
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/about">About</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/services">Services</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/projects">Projects</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/news">News</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled as="a" href="#contact-form" onClick={scrollToContact}>Contact</NavLinkStyled>
          </NavItem>
          <NavItem>
            <PhoneNumber href="tel:3368510050">Call Us: (336) 851-0050</PhoneNumber>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;



