import axios from 'axios';

const domain = {
    mockend: 'https://mockend.com'
};

let apiConfig = {
  baseURL: domain.mockend,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const api = axios.create(apiConfig);

export default api;