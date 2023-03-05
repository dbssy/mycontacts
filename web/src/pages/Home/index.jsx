import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, Container, Header, InputSearchContainer, ListHeader } from './styles';

import Arrow from '../../assets/icons/arrow.svg';
import Edit from '../../assets/icons/edit.svg';
import Trash from '../../assets/icons/trash.svg';

import formatPhone from '../../utils/formatPhone';
import delay from '../../utils/delay';

import Loader from '../../components/Loader';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`);
        await delay(500);

        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length === 1 ? `${filteredContacts.length} contato` : `${filteredContacts.length} contatos`}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={Edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
