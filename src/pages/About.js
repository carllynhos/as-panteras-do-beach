// pages/About.js
import React from 'react';
import styled from 'styled-components';
import About from '../components/About';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  background-color: #000; /* Cor de fundo preta */
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <About />
    </AboutContainer>
  );
};

export default AboutPage;