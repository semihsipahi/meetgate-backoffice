import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('User');

export async function login(request) {
  const payload = {
    email: request.email,
    password: request.password,
  };

  try {
    const response = await api.post(`Login/Login`, {
      ...payload,
    });

    if (!response) {
      return;
    }

    return response;
  } catch {
    /* empty */
  }
}
