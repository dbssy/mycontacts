import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: none;
    border-radius: 1.5rem;
    width: 100%;
    height: 3.125rem;
    padding: 0 1rem;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;
