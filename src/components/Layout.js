import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
  easing: 'ease',
  speed: 500
});

// Export this function so other components can use it
export const scrollToSection = (sectionId, offset = -150) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset + offset,
      behavior: 'smooth'
    });
  }
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const PageTransition = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const location = useLocation();

  // Handle scroll restoration
  useEffect(() => {
    // If there's a hash in the URL (e.g., /#contact-form), scroll to it
    if (location.hash) {
      // Wait for the page transition to complete
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        scrollToSection(id);
      }, 400); // Slightly longer than the transition duration
    } else if (!location.state?.scrollToContact) { // Only scroll to top if we're not trying to scroll to contact
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <LayoutContainer>
      <Navbar />
      <Main>
        <AnimatePresence mode="wait">
          <PageTransition
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout; 