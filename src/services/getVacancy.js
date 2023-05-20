import { instance } from '../API/api';
import { transformVacancyResponse } from '../utils/transformResponse';

export const getVacancy = async (id) => {
  const { data } = await instance.get(`vacancies/${id}/`);
  return transformVacancyResponse(data);
}
