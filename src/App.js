import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Interior from './pages/Interior';
import Construction from './pages/Construction';
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
        <Route path='/interior' element={<Interior/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/project-gallary' element={<ProjectGallary/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;