import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import NotFound from '../NotFound/NotFound';
import Paginate from '../../components/Paginate/Paginate';
import { useState } from 'react';
import { MAX_TOTAL, params } from '../../constants';
import { Loader } from '@mantine/core';
import { useGetVacancies } from '../../hooks/useGetVacancies';
import VacanciesList from '../../components/VacanciesList/VacanciesList';

const Main = () => {
  const [activePage, setPage] = useState(1);
  params.page = activePage - 1;

  const { isLoading, isSuccess, error, vacancies, refetch } = useGetVacancies(
    activePage,
    params
  );

  const total =
    isSuccess && (vacancies.total < MAX_TOTAL ? vacancies.total : MAX_TOTAL);

  if (error || (isSuccess && vacancies.total === 0)) {
    return <NotFound />;
  }

  return (
    <div className={styles.card}>
      <Filter />
      <div className={styles.right_column}>
        <SearchPanel refetch={refetch} setPage={setPage} />
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div className={styles.vacancy_column}>
            {isSuccess && <VacanciesList vacancies={vacancies.data} />}
          </div>
        )}

        <Paginate activePage={activePage} setPage={setPage} total={total} />
      </div>
    </div>
  );
};

export default Main;
