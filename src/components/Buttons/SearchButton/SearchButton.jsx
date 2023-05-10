import style1 from './SearchButton.module.scss';
import style2 from '../Button.module.scss';
import { clsx } from '@mantine/core';

const SearchButton = () => {
  return (
    <button className={clsx(style1.button, style2.common_button)}>Поиск</button>
  );
};
export default SearchButton;
