import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useIsFavorited = (vacancy) => {

  const [localStorageItems, setLocalStorage] = useLocalStorage('favorited');

  const isIncludesInLS = localStorageItems.some(items => items.id === vacancy.id);

  const [isFavorited, setIsFavorited] = useState(isIncludesInLS);

  const toggleFavorited = () => {
    if (isFavorited) {
      const localStorageItems = JSON.parse(localStorage.getItem('favorited'));
      const newArr = localStorageItems.filter(item => item.id !== vacancy.id);
      setLocalStorage(newArr);
    } else {
      const localStorageItems = JSON.parse(localStorage.getItem('favorited')) || [];
      setLocalStorage([...localStorageItems, vacancy]);
    }
    setIsFavorited(!isFavorited);
  }

  return [isFavorited, toggleFavorited];
}