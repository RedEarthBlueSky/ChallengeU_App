const challenges = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
  case 'GET_CHALLENGE_LIST_SUCCESS': {
    return Object.assign({}, state, {list:action.response});
  }
  case 'GET_CHALLENGE_LIST_FAILURE':
    return state;
  case 'GET_CHALLENGE_LIST_REQUEST':
    return state;
  default:
    return state;
  }
};

export default challenges;
