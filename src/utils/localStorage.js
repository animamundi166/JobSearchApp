export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorited')) || [];
}

export const createFavoritesArray = (id) => {
  const lsArr = getLocalStorage();
  lsArr.push(id);
  return lsArr;
}

export const removeFromFavoritesArray = (id) => {
  const lsArr = getLocalStorage();
  return lsArr.filter(item => item !== id);
}

export const setLocalStorage = (value) => {
  localStorage.setItem('favorited', JSON.stringify(value));
}



