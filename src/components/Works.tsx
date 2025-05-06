import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorksContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: #fff;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333;
  margin: 2rem 0 1.5rem 0;
  font-weight: 700;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 0 5vw 2rem 5vw;
`;

const ProjectCard = styled(motion.div)`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const Works: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Portfolio Generator',
      description: 'A sophisticated web application that uses AI to generate personalized portfolio websites based on user input and preferences.',
      tags: ['React', 'TypeScript', 'OpenAI', 'TailwindCSS']
    },
    {
      title: 'Real-time Collaborative Whiteboard',
      description: 'A web-based whiteboard application that allows multiple users to collaborate in real-time with features like drawing, text, and image sharing.',
      tags: ['WebRTC', 'Canvas API', 'Socket.io', 'React']
    },
    {
      title: 'Smart Task Management System',
      description: 'An intelligent task management platform that uses AI to prioritize tasks, suggest deadlines, and optimize workflow efficiency.',
      tags: ['Python', 'FastAPI', 'React', 'PostgreSQL']
    },
    {
      title: 'Blockchain-based Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring immutability and verifiability of votes.',
      tags: ['Solidity', 'Web3.js', 'React', 'Node.js']
    },
    {
      title: 'AR Shopping Experience',
      description: 'An augmented reality application that allows users to visualize furniture and decor in their space before purchasing.',
      tags: ['Three.js', 'WebXR', 'React', 'Node.js']
    },
    {
      title: 'AI Music Composer',
      description: 'An AI-powered music composition tool that generates original music based on user preferences and style inputs.',
      tags: ['Python', 'TensorFlow', 'React', 'Web Audio API']
    }
  ];

  return (
    <WorksContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * (index + 3) }}
            viewport={{ once: true }}
          >
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </WorksContainer>
  );
};

export default Works; 