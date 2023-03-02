import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;

    img {
      transform: rotate(-90deg);
      margin-right: 0.5rem;
    }

    span {
      color: ${({ theme }) => theme.colors.primary[500]};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
