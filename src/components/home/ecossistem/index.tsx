import React from 'react';
import { TextField, Divider, Alert, Button } from '@mui/material';
import { Container, Card, Logo, TitleCard, Subtitle, FormContainer, WrapperInput, ColorButton, WrapperActions } from './styles';

export const Content: React.FC = () => {
  console.log('home run');
  return (
    <Container>
      <Card>
        <Logo />
        <TitleCard>Log in</TitleCard>
        <Subtitle>Sign in on the internal platform</Subtitle>
        <FormContainer>
          <WrapperInput>
            <TextField label="Email Adress" variant="outlined" sx={{ width: '100%' }} />
          </WrapperInput>
          <WrapperInput>
            <TextField label="Password" variant="outlined" sx={{ width: '100%' }} />
          </WrapperInput>
          <WrapperInput>
            <ColorButton variant="contained" sx={{ width: '100%' }}>Log in</ColorButton>
          </WrapperInput>
          <WrapperInput>
            <Alert severity="info">You can use demo@devias.io and password Password123!</Alert>
          </WrapperInput>
          <Divider />
          <WrapperActions>
            <Button variant="text">Forgot password</Button>
            <ColorButton variant="contained">Create new account</ColorButton>
          </WrapperActions>
        </FormContainer>

      </Card>
    </Container>
  );
};
