import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import React from 'react';
import './index.css';

import App from './App';
import Header from './pages/Header'
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import Testimonies from './pages/Testimonies';
import Footer from './pages/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Project />} />
      <Route path="service" element={<Service />} />
      <Route path="testimonies" element={<Testimonies />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

