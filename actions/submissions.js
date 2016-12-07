import { CALL_API } from '../middlewares/apiClient';

export const getChallengeSubmissions = (id) => ({
  [CALL_API]: {
    method: 'GET',
    type:'GET_CHALLENGE_SUBMISSIONS',
    endpoint:`/submissions/challenge/${id}`
  }
});

export const getSelfSubmissions = () => {
  console.log('in action')
  return ({
  [CALL_API]: {
    method: 'GET',
    type:'GET_SELF_SUBMISSIONS',
    endpoint:`/submissions/self`
  }
})
};
