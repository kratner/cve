import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const BlockContainer = styled.div`
  margin-bottom: 2rem;
`;

const ContentBlock = ({ children }) => {
  return <BlockContainer>{children}</BlockContainer>;
};

const HomePage = ({ contentBlocks }) => {
  return (
    <Container>
      {/* <Title>Welcome to Our Ultra Modern Dark Theme</Title>
      <Subtitle>Discover the Future of Web Design</Subtitle>
      <Button>Get Started</Button> */}

      {contentBlocks.map((block, index) => (
        <ContentBlock key={index}>{block}</ContentBlock>
      ))}
    </Container>
  );
};

export default HomePage;
