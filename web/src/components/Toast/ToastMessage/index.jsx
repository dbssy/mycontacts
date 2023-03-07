import PropTypes from 'prop-types';

import { Container } from './styles';

import successIcon from '../../../assets/icons/success.svg';
import errorIcon from '../../../assets/icons/error.svg';

export default function ToastMessage({ type, text }) {
  return (
    <Container type={type}>
      {type === 'success' && <img src={successIcon} alt="Check" />}
      {type === 'danger' && <img src={errorIcon} alt="Error" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
