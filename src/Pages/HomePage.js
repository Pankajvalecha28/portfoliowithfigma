import React from 'react';
import {   Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar.js';
import Content from '../Components/Content.js';
import MySkills from '../Components/MySkills.js';
import Portfolio from '../Components/Portfolio.js';
import About from '../Components/About.js';
import Testimonials from '../Components/Testimonials.js';
import Contact from '../Components/Contact.js';
import Footer from '../Components/Footer.js';
import NavBarData from '../Data/NavBarData.js';
import FooterData from '../Data/FooterData.js';




const App = () => {
  return (
    
    <div>
      <NavBar data={NavBarData} />
      <Routes>
          <Route path="/" element={<div><Content /><MySkills/></div>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          
      </Routes>
      <Footer data={FooterData} />
    </div>
      
   
  );
};

export default App;
