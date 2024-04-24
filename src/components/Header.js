import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo.jpg'; 

const HeaderContainer = styled.header`
  background-color: black;
  color: pink;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px; /* Ajuste o espaçamento entre a imagem e o texto conforme necessário */
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: pink;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={LogoImage} alt="Logo da Empresa" />
        <LogoText>As Panteras do Beach</LogoText>
      </LogoContainer>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/events">Eventos</Link>
        <Link to="/gallery">Galeria</Link>
        <Link to="/contact">Contato</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
