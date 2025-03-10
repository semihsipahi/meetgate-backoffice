import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('Common');

export async function fetchResources(request) {
  try {
    const response = await api.get(`/Resource/GetResourceAllList`, {
      ...(request?.id && {
        id: request.id,
        ...(request?.prefix && {
          Prefix: request?.prefix,
        }),
      }),
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
