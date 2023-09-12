import axios from 'axios';

// export const API_URL = process.env.REACT_APP_BASE_URL;
export const API_URL = 'https://fourth-9qyivvzjg-akows.vercel.app';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
