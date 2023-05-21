import { useQuery } from '@tanstack/react-query';
import { getVacancies } from '../services/getVacancies';

export const useGetVacancies = (activePage, params) => {

  const {
    isLoading,
    isSuccess,
    isFetching,
    error,
    refetch,
    data: vacancies,
  } = useQuery({
    queryKey: ['vacancies', activePage], queryFn: () => getVacancies(params),
    keepPreviousData: true,
    enabled: Boolean(activePage),
  });

  return { isLoading, isSuccess, error, vacancies, refetch, isFetching };
}