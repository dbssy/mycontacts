import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import defaultTheme from './styles/themes/default';
import { Container } from './styles/App.style';

import Routes from './Routes';

import Header from './components/Header';
import ToastContainer from './components/Toast/ToastContainer';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
