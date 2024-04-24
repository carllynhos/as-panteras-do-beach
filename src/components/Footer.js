// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: pink;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} As Panteras do Beach. Todos os direitos reservados.
    </FooterContainer>
  );
};

export default Footer;