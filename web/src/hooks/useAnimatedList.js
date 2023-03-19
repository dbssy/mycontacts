import { useCallback, useState } from 'react';

export default function useAnimatedList() {
  const [items, setItems] = useState([]);
  const [pendingRemovalItemsId, setPendingRemovalItemsId] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsId(prevState => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemovalItemsId(
      (prevState) => prevState.filter((item) => item.id !== id),
    );
  }, []);

  return {
    items,
    setItems,
    pendingRemovalItemsId,
    handleRemoveItem,
    handleAnimationEnd,
  };
}
