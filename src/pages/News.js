import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.section`
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

function News() {
  return (
    <NewsContainer>
      <PageTitle>Latest News</PageTitle>
      <SectionContent>
        Stay tuned for updates and news about our services and promotions!
      </SectionContent>
    </NewsContainer>
  );
}

export default News;