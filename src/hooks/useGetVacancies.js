import { useQuery } from '@tanstack/react-query';
import api from '../API/api';

export const useGetVacancies = (activePage, params) => {

  const {
    isLoading,
    isSuccess,
    error,
    refetch,
    data: vacancies,
  } = useQuery({
    queryKey: ['vacancies', activePage], queryFn: () => api.getVacancies(params),
    keepPreviousData: true,
    enabled: Boolean(activePage),
  });

  return { isLoading, isSuccess, error, vacancies, refetch };
}