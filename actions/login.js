import { CALL_API } from '../middlewares/apiClient';

export const loginAction = (fbToken) => ({
  [CALL_API]: {
    type:'LOGIN',
    endpoint:'/login',
    fbToken
  }
});

export const setIdData = (fbToken, authToken, fbId, username, email) => ({
  type: 'SET_IDDATA',
  fbToken,
  authToken,
  fbId,
  username,
  email,
});
