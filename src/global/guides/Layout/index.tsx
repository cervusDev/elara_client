import React from 'react';
import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}