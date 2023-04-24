import { Button } from '@mantine/core';
import style from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={style.main}>
      <div>
        <span>Фильтры</span>
        <span>Сбросить все</span>
      </div>
      <div>
        <span>Отрасль</span>
      </div>
      <div>
        <span>Оклад</span>
      </div>
      <Button>Применить</Button>
    </div>
  );
};
export default Filter;
