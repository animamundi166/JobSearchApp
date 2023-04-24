import styles from './Main.module.scss';
import Filter from '../Filter/Filter';
import VacancyItem from '../vacancyItem/VacancyItem';

const Main = () => {
  return (
    <div className={styles.card}>
      <Filter />
      <div className={styles.vacancy_column}>
        <VacancyItem />
        <VacancyItem />
        <VacancyItem />
        <VacancyItem />
      </div>
    </div>
  );
};
export default Main;
