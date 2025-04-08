import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
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

// Keep only one implementation of the component
function Contact() {
  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      <SectionContent>
        For inquiries, please reach out to us at: <br />
        Email: info@x-tremeservices.com
      </SectionContent>
    </ContactContainer>
  );
}

export default Contact;