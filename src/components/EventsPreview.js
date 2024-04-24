import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventsContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 80%;
  margin: auto; // Centraliza o contêiner
`;

const EventTitle = styled.h2`
  font-size: 24px;
  color: pink;
  margin: 0 0 20px 0; // Ajuste para alinhar com GalleryTitle
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventDate = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const EventLocation = styled.p`
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const EventsPreview = () => {
  return (
    <StyledLink to="/events">
      <EventsContainer>
        <EventTitle>Próximos Eventos</EventTitle>
        <EventInfo>
          <EventDate>8 e 9 de junho de 2024</EventDate>
          <EventLocation>Local: A ser anunciado</EventLocation>
        </EventInfo>
      </EventsContainer>
    </StyledLink>
  );
};

export default EventsPreview;
