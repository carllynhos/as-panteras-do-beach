// components/MainBanner.js
import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/images/banner.jpg'; // Importe a imagem


const BannerContainer = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Cor de fundo preta */
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adicione uma sobreposição semi-transparente para melhorar a legibilidade do texto */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContent = styled.div`
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  color: pink; /* Cor do título rosa */
  margin-bottom: 20px;
`;

const BannerButton = styled.button`
  background-color: pink;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const MainBanner = () => {
  return (
    <BannerContainer>
      <BannerOverlay> {/* Use um overlay para colocar o conteúdo sobre a imagem de fundo */}
        <BannerContent>
          <BannerTitle>As Panteras do Beach</BannerTitle>
          <BannerButton>Junte-se a nós</BannerButton>
        </BannerContent>
      </BannerOverlay>
    </BannerContainer>
  );
};

export default MainBanner;