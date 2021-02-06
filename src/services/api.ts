import axios, { AxiosBasicCredentials, AxiosInstance } from 'axios'

// Default API will be your root
const API_ROOT = process.env.URL || 'http://localhost:3000/'
const TIMEOUT = 20000
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

class ApiService {
  private client: AxiosInstance

  constructor(
    baseURL: string = API_ROOT,
    timeout: number = TIMEOUT,
    headers: { Accept: string; 'Content-Type': string } = HEADERS,
    auth?: AxiosBasicCredentials | undefined
  ) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth
    })

    client.interceptors.response.use(this.handleSuccess, this.handleError)
    this.client = client
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleSuccess(response) {
    return response
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleError(error) {
    return Promise.reject(error)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get(path: string) {
    return this.client.get(path).then((response) => response.data)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  post(path: string, payload) {
    return this.client.post(path, payload).then((response) => response.data)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  put(path: string, payload) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.client.put(path, payload).then((response) => response.data)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  patch(path: string, payload) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.client.patch(path, payload).then((response) => response.data)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  delete(path: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.client.delete(path).then((response) => response.data)
  }
}

export default ApiService
