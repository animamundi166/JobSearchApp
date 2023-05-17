import { useQuery } from '@tanstack/react-query';
import api from '../API/api';

export const useGetCatalogues = () => {

  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ['dropdown'], queryFn: () => api.getCatalogues(),
  });

  return { data, isLoading };
}