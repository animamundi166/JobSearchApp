import style from './SearchPanel.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { useContext, useState } from 'react';
import { params } from '../../constants';
import { ParamsContext } from '../../providers/Params/context';

const SearchPanel = ({ refetch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setPage } = useContext(ParamsContext);

  const handleButtonClick = () => {
    params.keyword = searchTerm;
    params.page = 0;
    refetch();
    setPage(1);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <label>
      <div className={style.search}>
        <SearchIcon />
        <input
          data-elem='search-input'
          type='text'
          placeholder='Введите название вакансии'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div>
        <button
          data-elem='search-button'
          className={style.button}
          onClick={handleButtonClick}
        >
          Поиск
        </button>
      </div>
    </label>
  );
};

export default SearchPanel;
