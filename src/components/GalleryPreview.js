import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';


Modal.setAppElement('#root');

const GalleryContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: auto; // Centraliza o contêiner
`;

const GalleryTitle = styled.h2`
  font-size: 24px;
  color: pink;
  margin: 0 0 20px 0; // Ajuste para alinhar com EventTitle
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
`;

const StyledModal = styled(Modal)`
  background-color: #20232a;
  color: #61dafb;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  position: fixed; // Posicionamento fixo
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  max-width: 90vw;
  overflow-y: auto;
  z-index: 1000;
`;

const CloseButton = styled.button`
  background-color: #ff69b4; // Cor de fundo do botão alterada para rosa
  color: #ffffff; // Texto branco
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #ff85c0; // Cor ao passar o mouse, um rosa mais claro
  }
`;

const GalleryPreview = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const images = [Image1, Image2, Image3];

  return (
    <GalleryContainer>
      <GalleryTitle>Galeria de Imagens</GalleryTitle>
      <Carousel showThumbs={false} infiniteLoop showArrows centerMode centerSlidePercentage={33.33} useKeyboardArrows>
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image)}>
            <GalleryImage src={image} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={selectedImage} alt="Imagem em tamanho real" style={{ width: '100%' }} />
        <CloseButton onClick={closeModal}>Fechar</CloseButton>
      </StyledModal>
    </GalleryContainer>
  );
};

export default GalleryPreview;
