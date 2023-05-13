import { useQuery } from '@tanstack/react-query';
import api from '../API/api';

export const useGetCatalogues = () => {

  const {
    data,
    isSuccess
  } = useQuery(['dropdown'], () => api.getCatalogues());

  return { data, isSuccess };
}