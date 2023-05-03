export const formatSalary = (from, to, currency) => {
  let text = '';

  if ((from === 0) & (to === 0)) {
    text = 'не указана';

  } else if (from === 0) {
    text = `до ${to} ${currency}`;

  } else if (to === 0) {
    text = `от ${from} ${currency}`;

  } else if ((from > 0) & (to > 0) & (from === to)) {
    text = `${from} ${currency}`;

  } else if ((from > 0) & (to > 0)) {
    text = `${from} - ${to} ${currency}`;
  }

  return text;
};
