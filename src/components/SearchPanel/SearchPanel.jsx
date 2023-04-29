import style from './SearchPanel.module.scss';
import { ReactComponent as Search } from '../../assets/Search.svg';
import SearchButton from '../Buttons/SearchButton/SearchButton';

const SearchPanel = () => {
  return (
    <label>
      <div className={style.search}>
        <Search />
        <input
          type='text'
          placeholder='Введите название вакансии'
          // onChange={handleChange}
          // onKeyPress={handleKeyPress}
          // value={userName}
        />
      </div>
      <div>
        <SearchButton />
      </div>
    </label>
  );
};
export default SearchPanel;
