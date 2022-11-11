import React from 'react';


import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Project from './pages/Project';
import Service from './pages/Service';
import Testimonies from './pages/Testimonies';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Testimonies />
      <Contact />
    </div>
  )
}

export default App


