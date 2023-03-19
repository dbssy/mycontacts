import { useEffect } from 'react';

import { Container } from './styles';

import useAnimatedList from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {

  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsId,
    handleRemoveItem,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={pendingRemovalItemsId.includes(message.id)}
          onRemoveMessage={handleRemoveItem}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
