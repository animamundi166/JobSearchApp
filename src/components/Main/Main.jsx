import styles from './Main.module.scss';
import Filter from '../Filter/Filter';
import VacancyItem from '../vacancyItem/VacancyItem';
import SearchPanel from '../SearchPanel/SearchPanel';
import { useQuery } from '@tanstack/react-query';
import api from '../../API/api';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

const Main = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['Data'],
    queryFn: () => api.getVacancies(),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }
  console.log(data);

  return (
    <div className={styles.card}>
      <Filter />
      <div className={styles.vacancy_column}>
        <SearchPanel />
        <VacancyItem />
        <VacancyItem />
        <VacancyItem />
        <VacancyItem />
      </div>
    </div>
  );
};
export default Main;
