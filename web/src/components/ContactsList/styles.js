import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const ListContainer = styled.div`
  margin-top: 1.5rem;

  header {
    margin-bottom: 0.5rem;

    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary[500]};
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary[100]};
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.primary[500]};
        margin-left: 0.5rem;
        padding: 0.25rem;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 0.5rem;
    }
  }
`;
