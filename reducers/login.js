import { AsyncStorage } from 'react-native';

const auth = (
  state = {
    fbToken: '',
    authToken: '',
    fbId: '',
    username: '',
    email: '',
    statusError: ''
  },
  action
) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS': {
    if (action.response.authToken) {
      let idString = JSON.stringify({
        fbToken: action.response.fbToken,
        authToken: action.response.idToken,
        fbId: action.response.fbId,
        username: action.response.username,
        email: action.response.email,
        statusError: ''
      });
      AsyncStorage.setItem('idData', idString)
        .then(() => {console.log('Stored idData');})
        .catch(() => {console.log('Problem storing idData');});
      return Object.assign({}, state, idString);
    } else {
      return Object.assign({}, state, {
        statusError: action.response.error
      });
    }
  }
  case 'LOGIN_FAILURE':
    let error = 'Unknown error';
    if (action.response.error) error = action.response.error;
    return Object.assign({}, state, {
      statusError: error
    });
  case 'LOGIN_REQUEST':
    return Object.assign({}, state, {
      statusError: '' // we clear the status error in case multiple wrong logins
    });
  case 'SET_IDDATA':
    return Object.assign({}, state, {
      fbToken: action.fbToken,
      authToken: action.authToken,
      fbId: action.fbId,
      username: action.username,
      email: action.email
    });
  default:
    return state;
  }
};

export default auth;
