import React from 'react';
import { Container, Logo, TitleCard, Subtitle } from './styles';

interface IProps {
  children: React.ReactNode
}

export const Card: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Logo />
      <TitleCard>Log in</TitleCard>
      <Subtitle>Sign in on the internal platform</Subtitle>
      {children}
    </Container>
  );
};
