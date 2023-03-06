import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 2rem;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

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
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;

export const Header = styled.header`
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

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .details {
    margin-left: 1.5rem;

    strong {
      color: ${({ theme }) => theme.colors.danger[500]};
      font-size: 1.375rem;
      margin-bottom: 0.5rem;
      display: block;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
    text-align: center;
    margin-top: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;

  span {
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-left: 1.5rem;
    word-break: break-word;
  }
`;

export const ListHeader = styled.header`
  margin-top: 1.5rem;
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

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
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
      color: ${({ theme }) => theme.colors.gray[300]};
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
