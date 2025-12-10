import axios from 'axios';

const API_KEY = '53639164-946eeba40ce7ee6acba66c1a5'; // <-- встав свій ключ
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  // повертаємо data повністю (mentor просив повертати data)
  return response.data;
}
