import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  strong {
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};
    border-radius: 0.25rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[500]};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
