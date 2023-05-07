import axios from 'axios';
import { PER_PAGE } from '../constants';

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
    return response.data;
  },

  getVacancies: async (page = 0) => {
    const { data } = await http.get(`vacancies/?count=${PER_PAGE}&page=${page}`);
    return data.objects.map(item => ({
      id: item.id,
      profession: item.profession,
      town: item.town.title,
      worktime: item.type_of_work.title,
      minPayment: item.payment_from,
      maxPayment: item.payment_to,
      currency: item.currency,
    }));
  },
};

export default api;
