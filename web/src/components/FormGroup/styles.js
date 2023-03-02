import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger[500]};
    font-size: 0.75rem;
    margin-top: 0.5rem;
    display: block;
  }
`;
