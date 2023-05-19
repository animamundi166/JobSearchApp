import { axiosClassic } from '../API/api';

export const getToken = async () => {
  const { data } = await axiosClassic.get('oauth2/password/', {
    params: {
      login: import.meta.env.VITE_LOGIN,
      password: import.meta.env.VITE_PASSWORD,
      client_id: import.meta.env.VITE_CLIENT_ID,
      hr: import.meta.env.VITE_HR,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    }
  });
  localStorage.setItem('token', JSON.stringify(data));
}
