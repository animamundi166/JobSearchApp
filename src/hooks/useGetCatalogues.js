import { useQuery } from '@tanstack/react-query';
import { getCatalogues } from '../services/getCatalogues';

export const useGetCatalogues = () => {

  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ['dropdown'], queryFn: () => getCatalogues(),
  });

  return { data, isLoading };
}