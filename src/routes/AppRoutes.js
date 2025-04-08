import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page components
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import News from '../pages/News';

/**
 * AppRoutes component that centralizes all application routes
 * This makes it easier to manage routes as the application grows
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      
      {/* Add a catch-all route for 404 pages later */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes; 