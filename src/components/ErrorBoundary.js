import React from 'react';
import styled from 'styled-components';
import { useRouteError, Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #1d3557;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #e63946;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c1121f;
    transform: translateY(-3px);
  }
`;

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>
        {error?.message || "We encountered an unexpected error. Please try again."}
      </ErrorMessage>
      <HomeButton to="/">Return to Home</HomeButton>
    </ErrorContainer>
  );
} 