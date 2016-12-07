const submissions = (
  state = [],
  action
) => {
  switch (action.type) {
  case 'GET_CHALLENGE_SUBMISSIONS_SUCCESS': {
    return [...state, ...action.response];
  }
  case 'GET_CHALLENGE_SUBMISSIONS_FAILURE':
    return state;
  case 'GET_CHALLENGE_SUBMISSIONS_REQUEST':
    return state;
  case 'GET_SELF_SUBMISSIONS_SUCCESS': {
    return [...state, ...action.response];
  }
  case 'GET_SELF_SUBMISSIONS_FAILURE':
    return state;
  case 'GET_SELF_SUBMISSIONS_REQUEST':
    return state;
  default:
    return state;
  }
};

export default submissions;