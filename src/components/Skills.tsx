import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  width: 100%;
  max-width: 1200px;
`;

const SkillColumn = styled.div`
  background: none;
  box-shadow: none;
  border-radius: 0;
  padding: 1.5rem 1rem;
  flex: 1;
  min-width: 200px;
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
`;

const Skills: React.FC = () => (
  <SkillsSection>
    <Title>Skills & Expertise</Title>
    <SkillsGrid>
      <SkillColumn>
        <SkillTitle>Frontend Development</SkillTitle>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Styled Components</li>
        </ul>
      </SkillColumn>
      <SkillColumn>
        <SkillTitle>Backend Development</SkillTitle>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Django</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
        </ul>
      </SkillColumn>
      <SkillColumn>
        <SkillTitle>Tools & Technologies</SkillTitle>
        <ul>
          <li>Git</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Webpack</li>
        </ul>
      </SkillColumn>
      <SkillColumn>
        <SkillTitle>Soft Skills</SkillTitle>
        <ul>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          <li>Communication</li>
          <li>Agile Methodologies</li>
        </ul>
      </SkillColumn>
    </SkillsGrid>
  </SkillsSection>
);

export default Skills; 