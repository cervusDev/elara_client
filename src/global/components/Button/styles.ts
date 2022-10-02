import { styled as MuiStyled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const CustomButton = MuiStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#0070C0'),
  backgroundColor: '#0070C0',
  '&:hover': {
    backgroundColor: '#0070C0',
  },
}));
