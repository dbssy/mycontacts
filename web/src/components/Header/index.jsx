import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}