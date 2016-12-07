import { CALL_API } from '../middlewares/apiClient';

export const getChallengeSubmissions = (id) => ({
  [CALL_API]: {
    method: 'GET',
    type:'GET_CHALLENGE_SUBMISSIONS',
    endpoint:`/submissions/challenge/${id}`
  }
});