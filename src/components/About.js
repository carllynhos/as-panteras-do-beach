// components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  
  margin: 0 auto;
  padding: 25px;
  background-color: #000; /* Cor de fundo preta */
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  color: #ff69b4; /* Cor do título rosa */
  text-align: center;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutText>
        Há dois anos, nasceu um sonho. Um sonho de compartilhar a paixão pelo beach tennis e inspirar outros a descobrirem o amor por esse esporte vibrante e desafiador. Esse sonho tornou-se realidade com "As Panteras do Beach".
        <br/><br/>
        A empresa foi criada por Simone Masson, uma apaixonada professora de beach tennis, que viu na prática desse esporte uma oportunidade única de promover saúde, diversão e superação. Desde então, Simone tem sido a força motriz por trás de cada passo dado pela empresa, compartilhando seu conhecimento e entusiasmo com todos que cruzam seu caminho.
        <br/><br/>
        Nossa filosofia é simples, mas poderosa: acreditamos que o beach tennis vai além de um simples esporte. É uma forma de vida, uma celebração da amizade, do trabalho em equipe e do bem-estar físico e mental. Estamos comprometidos em promover uma cultura de inclusão, respeito e superação, onde todos são bem-vindos para participar, independentemente de idade, habilidade ou origem.
        <br/><br/>
        Junte-se a nós nesta jornada emocionante pelo mundo do beach tennis. Venha fazer parte da família "As Panteras do Beach" e descubra o poder transformador desse esporte que nos une e nos inspira a alcançar novos horizontes.
      </AboutText>
    </AboutContainer>
  );
};

export default About;