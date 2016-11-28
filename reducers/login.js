import { AsyncStorage } from 'react-native';

const auth = (
  state = {
    fbToken: '',
    authToken: '',
    fbId: '',
    username: '',
    email: '',
    picture: '',
    statusError: ''
  },
  action
) => {
  switch (action.type) {
  case 'FB_TOKEN_LOGIN_SUCCESS': {
    if (action.response.fbToken) {
      let idString = JSON.stringify({
        fbToken: action.response.fbToken,
        authToken: action.response.authToken,
        fbId: action.response.profileInfo.fbId,
        firstName: action.response.profileInfo.firstName,
        lastName: action.response.profileInfo.lastName,
        email: action.response.profileInfo.email,
        picture: action.response.profileInfo.picture,
        statusError: ''
      });
      AsyncStorage.setItem('idData', idString)
        .then(() => {console.log('Stored idData');})
        .catch(() => {console.log('Problem storing idData');});
      return Object.assign({}, state, idString);
    } else {
      return Object.assign({}, state, {
        fbToken: '',
        authToken: '',
        statusError: action.response.error
      });
    }
  }
  case 'FB_TOKEN_LOGIN_FAILURE':
    let error = 'Unknown error';
    if (action.response.error) error = action.response.error;
    return Object.assign({}, state, {
      fbToken: '',
      authToken: '',
      statusError: error
    });
  case 'FB_TOKEN_LOGIN_REQUEST':
    return Object.assign({}, state, {
      statusError: '' // we clear the status error in case multiple wrong logins
    });
  case 'SELF_TOKEN_LOGIN_SUCCESS': {
    if (action.response.fbToken) {
      let idString = JSON.stringify({
        fbToken: action.response.fbToken,
        authToken: action.response.authToken,
        fbId: action.response.profileInfo.fbId,
        firstName: action.response.profileInfo.firstName,
        lastName: action.response.profileInfo.lastName,
        email: action.response.profileInfo.email,
        picture: action.response.profileInfo.picture,
        statusError: ''
      });
      return Object.assign({}, state, idString);
    } else {
      return Object.assign({}, state, {
        fbToken: '',
        authToken: '',
        statusError: action.response.error
      });
    }
  }
  case 'SELF_TOKEN_LOGIN_FAILURE':
    let error2 = 'Unknown error';
    if (action.response.error) error2 = action.response.error;
    return Object.assign({}, state, {
      fbToken: '',
      authToken: '',
      statusError: error2
    });
  case 'SELF_TOKEN_LOGIN_REQUEST':
    return Object.assign({}, state, {
      statusError: '' // we clear the status error in case multiple wrong logins
    });
  case 'SET_IDDATA':
    return Object.assign({}, state, {
      fbToken: action.fbToken,
      authToken: action.authToken,
      fbId: action.fbId,
      email: action.email,
      firstName: action.firstName,
      lastName: action.lastName,
      picture: action.picture
    });
  default:
    return state;
  }
};

export default auth;
