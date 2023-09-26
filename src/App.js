import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/Pages/LoginPage';
import HomePage from '../src/Pages/HomePage.js';
import Portfolio from './Components/Portfolio.js';
import Testimonials from './Components/Testimonials.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import NavBar from './Components/NavBar.js';
import NavBarData from './Data/NavBarData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/homepage/portfolio" element={<div><NavBar data={NavBarData}/><Portfolio/></div>} />
          <Route path="/homepage/testimonials" element={<div><NavBar data={NavBarData}/><Testimonials/></div>} />
          <Route path="/homepage/about" element={<div><NavBar data={NavBarData}/><About/></div>} />
          <Route path="/homepage/contact" element={<div><NavBar data={NavBarData}/><Contact/></div>} />
      </Routes>
    </div>
  );
}

export default App;
