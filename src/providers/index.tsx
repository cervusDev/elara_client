import React from 'react';
import { theme } from '../styles/theme';
import { ReactQueryProvider } from './ReactQuery';
import { ThemeProvider } from 'styled-components';

interface IProps {
  children: React.ReactNode
}

export function MiddlewareProviders({ children }: IProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
