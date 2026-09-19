import axios from 'axios';

const API_KEY = '57635798-c4932ba894df776d1b1444d77';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * @param {string} query
 * @param {number} page
 * @returns {Promise<object>}
 */
export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
