import styled from 'styled-components';
import VercelIcon from '../../assets/vercel.svg';

export const Container = styled.div`
  width: 40%;
  height: auto;
  padding: 2rem;
  display: flex;
  border-radius: 7px;
  background: #FFFFFF;
  align-items: center;
  flex-direction: column;
  box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);
  -moz-box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);
  -webkit-box-shadow: -2px -1px 12px -3px rgba(0,0,0,0.66);

  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled(VercelIcon)`
  width: 75px;
  height: 75px;
`;

export const TitleCard = styled.span`
  color: #333333;
  font-size: 2rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #848484;
  font-size: 1rem;
`;
