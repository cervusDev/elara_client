import React from 'react';
import { Container } from './styles';
import { Card } from '../organisms/Card';
import { LoginForm } from '../organisms/Form';

export const Content: React.FC = () => {
  return (
    <Container>
      <Card>
        <LoginForm />
      </Card>
    </Container>
  );
};
