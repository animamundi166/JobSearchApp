import { useEffect, useState } from 'react';

export const useLocalStorage = (key) => {

  const favorited = JSON.parse(localStorage.getItem(key)) || [];

  const [value, setValue] = useState(favorited);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue];
}