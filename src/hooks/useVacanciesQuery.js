import { useQuery } from '@tanstack/react-query'
import api from '../API/api';

export const useVacanciesQuery = () => {
  const { isLoading, error, data: vacancies } = useQuery(['Data'], () => api.getVacancies());
  return { isLoading, error, vacancies }
}
