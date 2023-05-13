import style from './Filter.module.scss';
import { ReactComponent as ResetIcon } from '../../assets/Reset.svg';
import { Dropdown } from './Dropdown/Dropdown';
import ApplyButton from './ApplyButton/ApplyButton';
import { Input } from './NumberInputs/InputFrom';

const Filter = () => {
  return (
    <div className={style.main}>
      <div className={style.filters}>
        <span className={style.filters_caption}>Фильтры</span>
        <p className={style.reset_item}>
          <span className={style.reset_caption}>Сбросить все</span>
          <ResetIcon />
        </p>
      </div>
      <div className={style.title}>
        <span>Отрасль</span>
        <Dropdown />
      </div>
      <div className={style.title}>
        <span>Оклад</span>
        <Input />
        <Input />
      </div>
      <ApplyButton />
    </div>
  );
};
export default Filter;
