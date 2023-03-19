import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import successIcon from '../../../assets/icons/success.svg';
import errorIcon from '../../../assets/icons/error.svg';

function ToastMessage({
  message,
  isLeaving,
  animatedRef,
  onRemoveMessage
}) {
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
      role="button"
      tabIndex={0}
      type={message.type}
      isLeaving={isLeaving}
      ref={animatedRef}
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
  animatedRef: PropTypes.shape().isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};

export default memo(ToastMessage);
