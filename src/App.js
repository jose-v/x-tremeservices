import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const theme = {
  colors: {
    background: '#ffffff',
    primary: '#000000',
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background || 'white'};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top on pathname change
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]); // Only run on pathname changes

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;