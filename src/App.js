import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProjectGallary from './pages/ProjectGallary';
import Contact from './pages/Contact';

// effects
import ScrollToTop from './effects/ScrollToTop';

// scss
import './App.scss';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/project-gallery' element={<ProjectGallary/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <a href="https://wa.me/250781005276" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://i.pinimg.com/736x/bf/8a/76/bf8a76719f900b8757154eb3cfbc844a.jpg" alt="WhatsApp" />
      </a>
    </BrowserRouter>
  );
}

export default App;