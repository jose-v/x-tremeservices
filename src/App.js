import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import About from './pages/About';

const theme = {
  colors: {
    primary: '#2D2D2D',
    secondary: '#F5F5F5',
    accent: '#000000',
    background: '#FFFFFF',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="app-container" style={{ margin: 0, padding: 0 }}>
          <Navbar />
          <main style={{ margin: 0, padding: 0 }}>
            <Routes>
              <Route path="/" element={<AppRoutes />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;