import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface IProps {
  children: React.ReactNode
  onSubmit: () => void;
}

export const FormGuide: React.FC<IProps> = ({ children, onSubmit }) => {
  const methods = useForm<any>();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
