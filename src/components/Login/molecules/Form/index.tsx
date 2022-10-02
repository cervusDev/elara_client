import React from 'react';
import { WrapperInput } from './styles';
import { useAuth } from '../../../../hooks';
import { Button } from '../../../../global/components/Button';
import { FormGuide } from '../../../../global/guides/FormGuide';
import { FormField } from '../../../../global/components/inputs';

export const Inputs: React.FC = () => {
  const { handleLogin } = useAuth();

  return (
    <FormGuide onSubmit={handleLogin}>
      <WrapperInput>
        <FormField name="username" sx={{ width: '100%' }} label='username' />
      </WrapperInput>
      <WrapperInput>
        <FormField name='password' sx={{ width: '100%' }} label='Password' password />
      </WrapperInput>
      <WrapperInput>
        <Button type='submit' width='100%'>Log in</Button>
      </WrapperInput>
    </FormGuide>
  );
};
