import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles';

import Arrow from '../../assets/icons/arrow.svg';
import Edit from '../../assets/icons/edit.svg';
import Trash from '../../assets/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/new">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João</strong>
              <small>Instagram</small>
            </div>

            <span>dbssy@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={Edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro</strong>
              <small>Facebook</small>
            </div>

            <span>dbssy@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={Edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Debussy</strong>
              <small>LinkedIn</small>
            </div>

            <span>dbssy@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={Edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
