/* eslint-disable import/no-unresolved */
import React from 'react';
import { SnackbarProvider as Provider } from 'notistack';

interface IProps {
  children: React.ReactNode;
}

export const SnackbarProvider = ({ children }: IProps) => {
  const ref = React.createRef<Provider>();

  const iconVariant = {
    error: '',
    success: '',
    warning: '',
    info: '',
  };

  return (
    <Provider
      ref={ref}
      maxSnack={3}
      preventDuplicate
      iconVariant={iconVariant}
    >
      {children}
    </Provider>
  );
};
