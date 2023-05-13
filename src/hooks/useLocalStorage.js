import { useEffect, useState } from 'react';

export const useLocalStorage = () => {

  const favorited = JSON.parse(localStorage.getItem('favorited')) || [];

  const [value, setValue] = useState(favorited);

  useEffect(() => {
    localStorage.setItem('favorited', JSON.stringify(value));
  }, [value])

  return [value, setValue];
}