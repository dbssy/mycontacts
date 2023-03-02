import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.25rem;
  width: 100%;
  height: 3.125rem;
  margin-top: 1.5rem;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[300]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[900]};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;
