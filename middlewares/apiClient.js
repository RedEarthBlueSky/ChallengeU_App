const API_ROOT = require('../config.json').apiRoot;

const callApi = (endpoint, method, headers, data, multipart) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  return new Promise((resolve, reject) => {
    let body = JSON.stringify(data);
    if (multipart) body = data;
    fetch(fullUrl, {
      method,
      headers,
      body
    })
    .then(response => {
      console.log(response);
      response.json()
      .then(json => {
        if (Array.isArray(json)) {
          return resolve([].concat(json));
        }
        if (!response.ok) {
          return reject(json);
        }
        return resolve(Object.assign({}, json));
      })
      .catch((err) => {
        console.log('Error @ json', err );
      });
    })
    .catch((err) => {
      console.log('Error at middleware: ', err);
      reject(err);
    });
  });
};

export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') return next(action);

  let { endpoint, method, headers, data, multipart } = callAPI;
  const { type, username, password } = callAPI;

  method = method || 'GET';
  headers = headers || new Headers();

  let currentState = store.getState();
  if (currentState.login.authToken && currentState.login.authToken !== '') {
    headers.append('Authorization', `Bearer ${currentState.login.authToken}`);
  }

  if (multipart) {
    headers.append('content-type','multipart/form-data');
  } else {
    if (data) headers.append('content-type','application/json');
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (typeof type !== 'string') {
    throw new Error('Expected action type to be a string.');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  next(actionWith({type: `${type}_REQUEST`}));

  return callApi(endpoint, method, headers, data, multipart)
  .then(
    response => {
      next(
        actionWith(
          {
            response,
            type: `${type}_SUCCESS`
          }
        )
      );
    },
    error => {
      console.log('Error in middleware: ', err);
      next(
        actionWith(
          {
            error,
            type: `${type}_FAILURE`
          }
        )
      );
    }
  )
  .catch((err) => {
    console.log('Error @ middleware: ', err);
  });
};
