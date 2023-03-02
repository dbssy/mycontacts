import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 12.5rem;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

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
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
