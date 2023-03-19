import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import successIcon from '../../../assets/icons/success.svg';
import errorIcon from '../../../assets/icons/error.svg';

export default function ToastMessage({
  message,
  isLeaving,
  onRemoveMessage,
  onAnimationEnd
}) {
  const animatedElementRef = useRef(null);

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }

    const elementRef = animatedElementRef.current;

    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      elementRef.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [message.id, isLeaving, onAnimationEnd]);

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
      ref={animatedElementRef}
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
  onAnimationEnd: PropTypes.func.isRequired,
};
