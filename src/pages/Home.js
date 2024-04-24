// pages/Home.js
import React from 'react';
import MainBanner from '../components/MainBanner';
import EventsPreview from '../components/EventsPreview'; // Componente hipotético
import GalleryPreview from '../components/GalleryPreview'; // Componente hipotético

function Home() {
  return (
    <div>
      <MainBanner />
      <EventsPreview />  
      <GalleryPreview /> 
      {/* Adicione outros componentes ou seções conforme necessário */}
    </div>
  );
}

export default Home;