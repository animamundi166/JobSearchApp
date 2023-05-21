import { useContext, useState } from 'react';
import style from './Filter.module.scss';
import { ReactComponent as ResetIcon } from '../../assets/Reset.svg';
import { Dropdown } from './Dropdown/Dropdown';
import { InputFrom } from './NumberInputs/InputFrom';
import { initialParams, params } from '../../constants';
import { InputTo } from './NumberInputs/InputTo';
import { DrawerContext } from '../../providers/context';

const Filter = ({ refetch, setPage }) => {
  const { toggle } = useContext(DrawerContext);

  const [catalogValue, setCatalogValue] = useState(null);
  const [inputFromValue, setInputFromValue] = useState();
  const [inputToValue, setInputToValue] = useState();

  const resetParams = () => {
    Object.assign(params, initialParams);
    setCatalogValue(null);
    setInputFromValue('');
    setInputToValue('');
  };

  const applyParams = () => {
    params.page = 0;
    refetch();
    setPage(1);
    toggle();
  };

  return (
    <div className={style.main}>
      <div className={style.filters}>
        <span className={style.filters_caption}>Фильтры</span>
        <p className={style.reset_item}>
          <span className={style.reset_caption} onClick={resetParams}>
            Сбросить все
          </span>
          <ResetIcon />
        </p>
      </div>
      <div className={style.title}>
        <span>Отрасль</span>
        <Dropdown
          catalogValue={catalogValue}
          setCatalogValue={setCatalogValue}
        />
      </div>
      <div className={style.title}>
        <span>Оклад</span>
        <InputFrom
          data-elem='salary-from-input'
          inputFromValue={inputFromValue}
          setInputFromValue={setInputFromValue}
        />
        <InputTo
          data-elem='salary-to-input'
          inputToValue={inputToValue}
          setInputToValue={setInputToValue}
        />
      </div>

      <button
        data-elem='search-button'
        className={style.button}
        onClick={applyParams}
      >
        Применить
      </button>
    </div>
  );
};
export default Filter;
