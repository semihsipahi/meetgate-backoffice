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
    console.error('Error Post Data:', error);
  }
}

export async function updateQuestionSet(request) {
  try {
    const response = await api.post(`/QuestionSet/UpdateQuestionSet`, {
      id: request.id,
      name: request.name,
      description: request.description,
      statusId: request.statusId,
      purposeId: request.purposeId,
      sortId: request.sortId,
    });
    return response;
  } catch (error) {
    console.error('Error Put Data:', error);
  }
}

export async function fetchQuestionSets() {
  try {
    const response = await api.get(`/QuestionSet/GetQuestionSetList`);
    return response;
  } catch (error) {
    console.error('Error fetching Data:', error);
  }
}

export async function removeQuestionSets(id) {
  try {
    const response = await api.delete(`/QuestionSet/DeleteQuestionSet`, {
      id,
    });
    return response;
  } catch (error) {
    console.error('Error fetching Data:', error);
  }
}
