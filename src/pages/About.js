import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #2D2D2D;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #2D2D2D;
`;

function About() {
  return (
    <AboutContainer>
      <PageTitle>About Us</PageTitle>
      <SectionContent>
        X-treme Services is a family-owned and operated business specializing in Heating & Air and Electrical services. Our team is dedicated to providing quality service by courteous, friendly staff.
      </SectionContent>
    </AboutContainer>
  );
}

export default About;