import { instance } from '../API/api';
import { transformCataloguesResponse } from '../utils/transformResponse';

export const getCatalogues = async () => {
  const { data } = await instance.get('catalogues/');
  return data.map(transformCataloguesResponse);
}
