import apiClient from './apiClient';

// 데이터를 가져오는 함수
export async function fetchData() {
  try {
    const response = await apiClient.get('/api/server');

    if (response.data && typeof response.data === 'object') {
      return Object.keys(response.data).map((key) => ({
        time: key,
        ...response.data[key],
      }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
