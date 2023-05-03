import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Loader from '../../components/Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { useVacanciesQuery } from '../../hooks/useVacanciesQuery';
import VacancyItem from '../../components/VacancyItem/VacancyItem';

const Main = () => {
  const { isLoading, error, vacancies } = useVacanciesQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div className={styles.card}>
      <Filter />
      <div className={styles.vacancy_column}>
        <SearchPanel />
        {vacancies.length > 0 &&
          vacancies.map(item => (
            <VacancyItem
              key={item.id}
              vacancy_id={item.id}
              profession={item.profession}
              town={item.town.title}
              type_of_work={item.type_of_work.title}
              payment_to={item.payment_to}
              payment_from={item.payment_from}
              currency={item.currency}
            />
          ))}
      </div>
    </div>
  );
};
export default Main;
