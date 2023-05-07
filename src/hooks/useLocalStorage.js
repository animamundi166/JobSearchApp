import { useEffect, useState } from 'react';

export const useLocalStorage = () => {

  const localStorageIds = () => JSON.parse(localStorage.getItem('favorited')) || [];

  const [value, setValue] = useState(localStorageIds);

  useEffect(() => {
    localStorage.setItem('favorited', JSON.stringify(value));
  }, [value])

  return [value, setValue];
}