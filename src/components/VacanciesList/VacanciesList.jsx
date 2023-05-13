import VacancyItem from '../VacancyItem/VacancyItem';
import styles from './VacanciesList.module.scss';

const VacanciesList = ({ vacancies }) => {
  return (
    <div className={styles.vacancy_column}>
      {vacancies.length > 0 &&
        vacancies.map(item => <VacancyItem key={item.id} vacancy={item} />)}
    </div>
  );
};
export default VacanciesList;
