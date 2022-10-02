import React from 'react';
import { Inputs } from '../../molecules/Form';
import { Button } from '@/global/components/Button';
import { Container, WrapperActions } from './styles';
import { Divider, Button as MuiButton } from '@mui/material';

export const LoginForm: React.FC = () => {
  return (
    <Container>
      <Inputs />
      <Divider />
      <WrapperActions>
        <MuiButton variant="text">Forgot password</MuiButton>
        <Button variant="contained">Create new account</Button>
      </WrapperActions>
    </Container>
  );
};
