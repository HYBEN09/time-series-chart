import { styled } from 'styled-components';

interface ChartTitleProps {
  title: string;
  content: string;
}

export function ChartTitle({ title, content }: ChartTitleProps) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </TitleContainer>
  );
}

const TitleContainer = styled.header`
  width: 100%;
  padding: 1.2rem;
  min-width: 400px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  margin-top: 14px;
`;
