import React from 'react';
import { CustomButton } from './styles';

interface IProps {
  children: React.ReactNode
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
}

export const Button: React.FC<IProps> = ({
children,
type='text',
variant='contained',
width,
}) =>
  <CustomButton
    variant={variant}
    type={type}
    sx={{ width }}>
  {children}
</CustomButton>;
