import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Paginate from '../../components/Paginate/Paginate';
import { useContext, useEffect } from 'react';
import { MAX_TOTAL_ITEMS, params } from '../../constants';
import { Loader } from '@mantine/core';
import { useGetVacancies } from '../../hooks/useGetVacancies';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useNavigate } from 'react-router-dom';
import DrawerWrapper from '../../components/Drawer/Drawer';
import { useMediaQuery } from '@mantine/hooks';
import { ParamsContext } from '../../providers/Params/context';

const Main = () => {
  const { activePage, setPage } = useContext(ParamsContext);
  const matches = useMediaQuery('(max-width: 1024px)');

  const navigate = useNavigate();

  params.page = activePage - 1;

  const { isLoading, isSuccess, error, vacancies, refetch, isFetching } =
    useGetVacancies(activePage, params);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activePage]);

  const total =
    isSuccess &&
    (vacancies.total < MAX_TOTAL_ITEMS ? vacancies.total : MAX_TOTAL_ITEMS);

  useEffect(() => {
    if (error || (!isFetching && total === 0)) {
      navigate('/404');
    }
  }, [error, isFetching, navigate, total]);

  return (
    <div className={styles.card}>
      {matches ? (
        <DrawerWrapper>
          <Filter refetch={refetch} />
        </DrawerWrapper>
      ) : (
        <Filter refetch={refetch} />
      )}

      <div className={styles.right_column}>
        <SearchPanel refetch={refetch} />
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
