import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary[500]};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success[500]};
`,
  danger: css`
    background: ${({ theme }) => theme.colors.danger[500]};
`,
};

export const Container = styled.div`
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }

  & + & {
    margin-top: 0.75rem;
  }

  ${({ type }) => containerVariants[type] || containerVariants.default};
`;
