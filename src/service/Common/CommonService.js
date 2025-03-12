import { CONFIGURATION_TYPES } from '../../utils/constants/Constants';
import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('Common');

export async function fetchTypeList() {
  try {
    const response = await api.get(`/Type/GetTypeList`, {
      parentId: CONFIGURATION_TYPES.Parent,
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
