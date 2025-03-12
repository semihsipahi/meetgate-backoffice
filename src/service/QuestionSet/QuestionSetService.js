import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('Meet');

export async function createQuestionSet(request) {
  try {
    const response = await api.post(`/QuestionSet/CreateQuestionSet`, {
      name: request.name,
      description: request.description,
      statusId: request.statusId,
      purposeId: request.purposeId,
      sortId: request.sortId,
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function fetchQuestionSets() {
  try {
    const response = await api.get(`/QuestionSet/GetQuestionSetList`);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
