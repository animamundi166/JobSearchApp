import axios from 'axios';
import { transformCataloguesResponse, transformVacancyResponse } from '../utils/transformResponse';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "x-secret-key": import.meta.env.VITE_X_SECRET_KEY,
    "X-Api-App-Id": import.meta.env.VITE_X_API_APP_ID,
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
});

const api = {
  getAccessToken: async () => {
    const response = await http.get(`oauth2/password/?login=${import.meta.env.VITE_LOGIN}&password=${import.meta.env.VITE_PASSWORD}&client_id=${import.meta.env.VITE_CLIENT_ID}&hr=${import.meta.env.VITE_HR}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`);
    return response.data;
  },

  getCatalogues: async () => {
    const response = await http.get('catalogues/');
    return response.data.map(transformCataloguesResponse);
  },

  getVacancies: async (params) => {
    const { data } = await http.get('vacancies/', { params });
    return { data: data.objects.map(transformVacancyResponse), total: data.total };
  },

  getVacancy: async (id) => {
    const { data } = await http.get(`vacancies/${id}/`);
    return transformVacancyResponse(data);
  },
};

export default api;
