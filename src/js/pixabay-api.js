import axios from 'axios';

const API_KEY = '57635798-c4932ba894df776d1b1444d77';
const BASE_URL = 'https://pixabay.com/api/';

/**
 @param {string} query
 @returns {Promise<object>}
 */
export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
