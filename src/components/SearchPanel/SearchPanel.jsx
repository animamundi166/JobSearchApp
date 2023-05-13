import style from './SearchPanel.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { useState } from 'react';
import { params } from '../../constants';

const SearchPanel = ({ refetch, setPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleButtonClick = () => {
    params.keyword = searchTerm;
    params.page = 0;
    refetch();
    setSearchTerm('');
    setPage(1);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && searchTerm !== '') {
      handleButtonClick();
    }
  };

  return (
    <label>
      <div className={style.search}>
        <SearchIcon />
        <input
          type='text'
          placeholder='Введите название вакансии'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div>
        <button className={style.button} onClick={handleButtonClick}>
          Поиск
        </button>
      </div>
    </label>
  );
};

export default SearchPanel;
