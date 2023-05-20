import { instance } from '../API/api';
import { transformVacancyResponse } from '../utils/transformResponse';

export const getVacancies = async (params) => {
  const { data } = await instance.get('vacancies/', { params });
  return { data: data.objects.map(transformVacancyResponse), total: data.total };
}
