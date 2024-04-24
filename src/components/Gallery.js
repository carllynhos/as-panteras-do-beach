// Gallery.js
import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  // Adicione estilos conforme necessário
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  // Adicione mais estilos conforme necessário
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;