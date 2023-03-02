import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/default';

import { Container } from './styles';

import { Header } from '../Header';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}
