import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Paginate from '../../components/Paginate/Paginate';
import { useEffect, useState } from 'react';
import { MAX_TOTAL_ITEMS, params } from '../../constants';
import { Loader } from '@mantine/core';
import { useGetVacancies } from '../../hooks/useGetVacancies';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const [activePage, setPage] = useState(1);
  params.page = activePage - 1;

  const { isLoading, isSuccess, error, vacancies, refetch } = useGetVacancies(
    activePage,
    params
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activePage]);

  const total =
    isSuccess &&
    (vacancies.total < MAX_TOTAL_ITEMS ? vacancies.total : MAX_TOTAL_ITEMS);

  if (error || total === 0) {
    navigate('/404');
  }

  return (
    <div className={styles.card}>
      <Filter refetch={refetch} setPage={setPage} />
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

        {total > 4 && (
          <Paginate activePage={activePage} setPage={setPage} total={total} />
        )}
      </div>
    </div>
  );
};

export default Main;
