import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import ArrowLeft from '../../assets/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={ArrowLeft} alt="Back" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
