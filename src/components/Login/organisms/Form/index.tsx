import React from 'react';
import { Inputs } from '../../molecules/Form';
import { Container, WrapperActions } from './styles';
import { Divider, Button as MuiButton } from '@mui/material';
import { Button } from '../../../../global/components/Button';

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
