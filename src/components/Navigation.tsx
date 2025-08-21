// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:26:27.918Z
// Section: navigation
// Category: navigation
// Template ID: navigation-c001
// Page: layout
// Component: Navigation

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavBrand = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #4CAF50;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavBrand to="/">Invoicely</NavBrand>
      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </HamburgerButton>
      <NavList className={isOpen ? 'show' : ''}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pricing">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/features">Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;