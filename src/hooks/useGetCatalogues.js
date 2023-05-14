import { useQuery } from '@tanstack/react-query';
import api from '../API/api';

export const useGetCatalogues = () => {

  const {
    data,
    isSuccess
  } = useQuery({
    queryKey: ['dropdown'], queryFn: () => api.getCatalogues(),
  });

  return { data, isSuccess };
}