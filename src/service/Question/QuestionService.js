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

export async function fetchQuestionList() {
  const response = await api.get(`/Question/GetQuestionList`);
  return response;
}

export async function removeQuestion(id) {
  return api.delete(`/Question/DeleteQuestion`, { id });
}

export async function fetchQuestionAI(request) {
  try {
    const response = await api.post(`/Question/GetQuestionAi`, {
      subject: request.subject,
      description: request.description,
      difficulty: request.difficulty,
      language: request.language,
      questionCount: request.questionCount,
      answerCount: request.answerCount,
    });
    return response;
  } catch (error) {
    console.error('Error Put Data:', error);
  }
}
