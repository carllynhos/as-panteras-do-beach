// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body, #root {
    background-color: #000; /* Cor de fundo preta */
    color: pink; /* Cor do texto branca */
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

function App() {
  return (
    
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;