import styled from 'styled-components';
import VercelIcon from '../assets/vercel.svg';
import { styled as MuiStyled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 40%;
  height: auto;
  padding: 2rem;
  display: flex;
  background: #FFFFFF;
  border-radius: 7px;
  box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);
  -webkit-box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);
  -moz-box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);
  align-items: center;
  flex-direction: column;

  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled(VercelIcon)`
  width: 50px;
  height: 50px;
`;

export const TitleCard = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #333333
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #848484
`;

export const FormContainer = styled.div`
  width: 113%;
  padding: 2rem;
`;

export const WrapperInput = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const ColorButton = MuiStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#0070C0'),
  backgroundColor: '#0070C0',
  '&:hover': {
    backgroundColor: '#0070C0',
  },
}));

export const WrapperActions = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
