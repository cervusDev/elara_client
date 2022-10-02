import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const WrapperActions = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
