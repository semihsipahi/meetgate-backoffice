import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('Meet');

export async function fetchQuestions() {
  try {
    const response = await api.get(`/Question/GetQuestionList'`);
    return response;
  } catch (error) {
    console.error('Error fetching Data:', error);
  }
}
