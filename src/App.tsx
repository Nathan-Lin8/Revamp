import React from 'react';
import styled from 'styled-components';
import ScrollContainer from './components/ScrollContainer';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ScrollContainer>
        <LandingPage />
        <AboutMe />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </ScrollContainer>
    </AppContainer>
  );
};

export default App; 