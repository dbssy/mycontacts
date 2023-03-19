import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import successIcon from '../../../assets/icons/success.svg';
import errorIcon from '../../../assets/icons/error.svg';

export default function ToastMessage({ message, isLeaving, onRemoveMessage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      isLeaving={isLeaving}
      onClick={handleRemoveToast}
    >
      {message.type === 'success' && <img src={successIcon} alt="Check" />}
      {message.type === 'danger' && <img src={errorIcon} alt="Error" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
