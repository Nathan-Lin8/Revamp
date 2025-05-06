import React from 'react';
import styled from 'styled-components';

const LandingSection = styled.section`
  height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  padding: 0 5vw;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const LandingPage: React.FC = () => (
  <LandingSection>
    <Title>Welcome to My Portfolio</Title>
    <Subtitle>Scroll down to learn more about me and my work</Subtitle>
  </LandingSection>
);

export default LandingPage; 