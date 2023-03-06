import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 0.25rem;
  width: 100%;
  max-width: 28.125rem;
  padding: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme, danger }) => (
    danger
      ? theme.colors.danger[500]
      : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  .cancel-button {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[300]};
    border: none;
    margin-right: 0.5rem;
  }
`;
