import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.25rem;
  height: 3.125rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[300]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[900]};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]} !important;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger[500]};

    &:hover {
      background: ${theme.colors.danger[300]};
    }

    &:active {
      background: ${theme.colors.danger[900]};
    }
  `}
`;
