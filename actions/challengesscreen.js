import { CALL_API } from '../middlewares/apiClient';

export const challengesList = () => ({
  [CALL_API]: {
    method: 'GET',
    type:'GET_CHALLENGE_LIST',
    endpoint:'/challenges'
  }
});
