// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

function Projects() {
  return (
    <ProjectsContainer>
      <PageTitle>Our Projects</PageTitle>
      <p>Details about the projects will go here.</p>
    </ProjectsContainer>
  );
}

export default Projects;