import React from 'react';
import { theme } from '@/styles/theme';
import { SnackbarProvider } from './Snackbar';
import { ReactQueryProvider } from './ReactQuery';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from '@/context/auth';
import { StyledEngineProvider } from '@mui/material/styles';

interface IProps {
  children: React.ReactNode
}

export function MiddlewareProviders({ children }: IProps) {
  return (
    <ReactQueryProvider>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <StyledEngineProvider injectFirst>
              {children}
            </StyledEngineProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </ReactQueryProvider>
  );
}
