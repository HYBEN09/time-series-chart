import axios from 'axios';
import { API_URL } from '@/constants/url';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
