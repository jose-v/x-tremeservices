import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
    border-bottom-color: ${props => props.theme.colors.accent};
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <StyledLink 
      to={to} 
      className={isActive ? 'active' : ''} 
      onClick={onClick}
      style={({ isActive }) => ({
        color: isActive ? '#000000' : '#000000',
      })}
    >
      {children}
    </StyledLink>
  );
};

export default NavLink; 