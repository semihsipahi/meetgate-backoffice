import axios from 'axios';
import Cookies from 'js-cookie';

class ApiService {
  constructor(namespace) {
    const baseURLs = {
      Common: import.meta.env.VITE_API_COMMON,
      Meet: import.meta.env.VITE_API_MEET,
      Report: import.meta.env.VITE_API_REPORT,
      User: import.meta.env.VITE_API_USER,
    };

    if (!baseURLs[namespace]) {
      throw new Error(`Invalid API namespace: ${namespace}`);
    }

    this.api = axios.create({
      baseURL: baseURLs[namespace],
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.baseURLs = baseURLs;
    this.namespace = namespace;

    this.initializeHeaders();
  }

  initializeHeaders() {
    console.log('Running Initialize Header');

    const authToken = Cookies.get('authToken');
    const language = Cookies.get('LanguageId');

    if (authToken) {
      this.setAuthToken(authToken);
      this.setAuthTokenCookie(authToken);
    }

    if (language) {
      this.setLanguageId(language);
      this.setLanguageIdCookie(language);
    }
  }

  setAuthToken(token) {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.api.defaults.headers.common['Authorization'];
  }

  setLanguageId(LanguageId) {
    this.api.defaults.headers.common['LanguageId'] = LanguageId;
  }

  setAuthTokenCookie(token) {
    Cookies.set('authToken', token);
  }

  setLanguageIdCookie(LanguageId) {
    Cookies.set('LanguageId', LanguageId);
  }

  async request(method, endpoint, { data = {}, params = {} } = {}) {
    this.initializeHeaders();

    try {
      const response = await this.api({
        method,
        url: endpoint,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  get(endpoint, params = {}) {
    return this.request('get', endpoint, { params });
  }

  post(endpoint, data) {
    return this.request('post', endpoint, { data });
  }

  put(endpoint, data) {
    return this.request('put', endpoint, { data });
  }

  delete(endpoint) {
    return this.request('delete', endpoint);
  }

  handleError(error) {
    console.error(
      'API Error:',
      error.response?.status,
      error.response?.data || error.message
    );
    throw error;
  }
}

export default ApiService;
