import styled from 'styled-components';

export default styled.select`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  width: 100%;
  height: 3.125rem;
  padding: 0 1rem;
  outline: 0;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    opacity: 1;
  }
`;
