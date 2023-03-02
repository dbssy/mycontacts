import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />
    </Container>
  );
}
