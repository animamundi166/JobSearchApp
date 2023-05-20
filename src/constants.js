export const PER_PAGE = 4;
export const MAX_TOTAL_ITEMS = 500;

export const baseHeaders = {
  "x-secret-key": import.meta.env.VITE_X_SECRET_KEY,
  "X-Api-App-Id": import.meta.env.VITE_X_API_APP_ID,
}

export const initialParams = {
  // 'published': 1,
  // 'count': PER_PAGE,
  // 'keyword': '',
  'page': 0,
  'catalogues': '',
  'payment_from': '',
  'payment_to': '',
}

export const params = {
  'published': 1,
  'count': PER_PAGE,
  'page': 0,
  'keyword': '',
  'catalogues': '',
  'payment_from': '',
  'payment_to': '',
}

