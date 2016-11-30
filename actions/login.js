import { CALL_API } from '../middlewares/apiClient';

export const fbLoginAction = (fbToken) => ({
  [CALL_API]: {
    method: 'POST',
    type:'FB_TOKEN_LOGIN',
    endpoint:'/sign-in/facebook',
    data: { fbToken }
  }
});

export const selfLoginAction = (authToken) => ({
  [CALL_API]: {
    method: 'POST',
    type:'SELF_TOKEN_LOGIN',
    endpoint:'/me',
    authToken
  }
});

export const setIdData = (fbToken, authToken, fbId, firstName, lastName, picture, email) => ({
  type: 'SET_IDDATA',
  fbToken,
  authToken,
  fbId,
  firstName,
  lastName,
  picture,
  email,
});
