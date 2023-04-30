export const formatSalary = (from, to, currency) => {
  let text = '';

  if ((from === 0) & (to === 0)) {
    text = 'не указана';
  }
  if (from === 0) {
    text;
  } else {
    text = `от ${from} ${currency}`;
  }
  if (to === 0) {
    text;
  } else {
    text = `до ${to} ${currency}`;
  }
  if ((from > 0) & (to > 0)) {
    text = `${from} - ${to} ${currency}`;
  }
  return text;
};