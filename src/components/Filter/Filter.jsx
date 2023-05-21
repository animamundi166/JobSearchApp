import { useContext } from 'react';
import style from './Filter.module.scss';
import { ReactComponent as ResetIcon } from '../../assets/Reset.svg';
import { Dropdown } from './Dropdown/Dropdown';
import { InputFrom } from './NumberInputs/InputFrom';
import { InputTo } from './NumberInputs/InputTo';
import { DrawerContext } from '../../providers/Drawer/context';
import { ParamsContext } from '../../providers/Params/context';
import { params } from '../../constants';

const Filter = ({ refetch }) => {
  const { toggle } = useContext(DrawerContext);
  const { resetParams, setPage, inputFromValue, inputToValue } =
    useContext(ParamsContext);

  const applyParams = () => {
    addNoAgreement;
    params.page = 0;
    refetch();
    setPage(1);
    toggle();
  };

  const addNoAgreement =
    inputFromValue > 0 || inputToValue > 0
      ? (params.no_agreement = 1)
      : (params.no_agreement = 0);

  const applyAndResetParams = () => {
    resetParams(), applyParams();
  };

  return (
    <div className={style.main}>
      <div className={style.filters}>
        <span className={style.filters_caption}>Фильтры</span>
        <p className={style.reset_item}>
          <span className={style.reset_caption} onClick={applyAndResetParams}>
            Сбросить все
          </span>
          <ResetIcon />
        </p>
      </div>

      <div className={style.title}>
        <span>Отрасль</span>
        <Dropdown />
      </div>

      <div className={style.title}>
        <span>Оклад</span>
        <InputFrom data-elem='salary-from-input' />
        <InputTo data-elem='salary-to-input' />
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
