import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  .form-item {
    position: relative;

    .loader {
      right: 1rem;
      top: 1.125rem;
      position: absolute;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.danger[500]};
    font-size: 0.75rem;
    margin-top: 0.5rem;
    display: block;
  }
`;
