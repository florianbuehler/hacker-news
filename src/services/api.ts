import axios from 'axios';

// Default API will be your root
const API_ROOT = process.env.URL || 'http://localhost:3000/';
const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class ApiService {
  // @ts-ignore
  constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    // @ts-ignore
    this.client = client;
  }

  // @ts-ignore
  handleSuccess(response) {
    return response;
  }

  // @ts-ignore
  handleError(error) {
    return Promise.reject(error);
  }

  // @ts-ignore
  get(path) {
    // @ts-ignore
    return this.client.get(path).then(response => response.data);
  }
  
  // @ts-ignore
  post(path, payload) {
    // @ts-ignore
    return this.client.post(path, payload).then(response => response.data);
  }

  // @ts-ignore
  put(path, payload) {
    // @ts-ignore
    return this.client.put(path, payload).then(response => response.data);
  }

  // @ts-ignore
  patch(path, payload) {
    // @ts-ignore
    return this.client.patch(path, payload).then(response => response.data);
  }

  // @ts-ignore
  delete(path) {
    // @ts-ignore
    return this.client.delete(path).then(response => response.data);
  }
}

export default ApiService;