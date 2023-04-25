import style from './Filter.module.scss';
import { ReactComponent as Reset } from '../../assets/Reset.svg';
import { Dropdown } from '../Dropdown/Dropdown';
import ApplyButton from '../Buttons/ApplyButton/ApplyButton';

const Filter = () => {
  return (
    <div className={style.main}>
      <div className={style.filters}>
        <span className={style.filters_caption}>Фильтры</span>
        <div className={style.reset_item}>
          <span className={style.reset_caption}>Сбросить все</span>
          <Reset className={style.reset_logo} />
        </div>
      </div>
      <div className={style.title}>
        <span>Отрасль</span>
        <Dropdown />
      </div>
      <div className={style.title}>
        <span>Оклад</span>
      </div>
      <ApplyButton />
    </div>
  );
};
export default Filter;
