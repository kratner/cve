import React from "react";

import styled from "styled-components";

interface BlockContainerProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  // background-color: #000;
  color: #fff;
`;

const FixedHeader = styled.div`
  padding: 0em 1.5em;
`;

const FixedFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  padding: 1em;
`

const ContentUnderlay = styled.div`
  position: fixed;
  top: 0;
  z-index: -2;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.4rem;
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

// const ContentBlock = ({ children }) => {
//   return <BlockContainer>{children}</BlockContainer>;
// };

const ContentBlock: React.FC<BlockContainerProps> = ({ children}) => {
  return <BlockContainer>{children}</BlockContainer>;
}

interface HomePageProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  contentBlocks?: React.ReactNode[];
  footerText?: string;
}

const HomePage: React.FC<HomePageProps> = ({
  title,
  subtitle,
  buttonText,
  contentBlocks,
  footerText
}) => {
  return (
    <Container>
      <FixedHeader>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {buttonText && <Button>{buttonText}</Button>}
      </FixedHeader>
      <ContentUnderlay>
        {contentBlocks?.map((block, index) => (
          <ContentBlock key={index}>{block}</ContentBlock>
        ))}
      </ContentUnderlay>
      <FixedFooter>
        {footerText && <div>{footerText}</div>}
      </FixedFooter>
    </Container>
  );
};

export default HomePage;