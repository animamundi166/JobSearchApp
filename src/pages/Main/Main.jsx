import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import NotFound from '../NotFound/NotFound';
import VacancyItem from '../../components/VacancyItem/VacancyItem';
import Paginate from '../../components/Paginate/Paginate';
import { useState } from 'react';
import { TOTAL } from '../../constants';
import { useQuery } from '@tanstack/react-query';
import api from '../../API/api';
import { Loader } from '@mantine/core';

const Main = () => {
  const [activePage, setPage] = useState(1);

  const {
    isLoading,
    error,
    data: vacancies,
  } = useQuery(['Data', activePage], () => api.getVacancies(activePage - 1), {
    keepPreviousData: true,
  });

  if (error) {
    return <NotFound />;
  }

  return (
    <div className={styles.card}>
      <Filter />
      <div className={styles.right_column}>
        <SearchPanel />
        {isLoading ? (
          <div className={styles.loader}>
            <Loader variant='dots' />
          </div>
        ) : (
          <div className={styles.vacancy_column}>
            {vacancies &&
              vacancies.map(item => (
                <VacancyItem key={item.id} vacancy={item} />
              ))}
          </div>
        )}

        <Paginate activePage={activePage} setPage={setPage} total={TOTAL} />
      </div>
    </div>
  );
};
export default Main;
