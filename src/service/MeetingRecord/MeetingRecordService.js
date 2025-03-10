import ApiService from '../../utils/http/AxiosHelper';

const api = new ApiService('Meet');

export async function fetchMeetingRecords() {
  const meetingInvintationId = 'd6c15979-0ef3-43c4-966b-0eb114cbe356';

  try {
    const response = await api.get(`/MeetingRecord/GetMeetingRecordList`, {
      meetingInvintationId,
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
