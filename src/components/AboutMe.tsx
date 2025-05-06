import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
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

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;
  width: 100%;
  max-width: 1200px;
  font-size: 1.2rem;
  color: #333;
`;

const AboutMe: React.FC = () => (
  <AboutSection>
    <Title>About Me</Title>
    <AboutContent>
      <div>
        I am a passionate developer with a keen eye for detail and a love for creating beautiful, functional applications. My journey in software development has been driven by curiosity and a constant desire to learn and improve.<br /><br />
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
      </div>
      <div>
        I believe in writing clean, maintainable code and creating user experiences that are both intuitive and delightful. My approach combines technical expertise with creative problem-solving to deliver solutions that make a real impact.<br /><br />
        Let's connect and discuss how we can work together to bring your ideas to life!
      </div>
    </AboutContent>
  </AboutSection>
);

export default AboutMe; 