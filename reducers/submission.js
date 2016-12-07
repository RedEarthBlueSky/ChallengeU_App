
const submission = (
  state = {
    videoPath: '',
    challenge_id: '',
    challenged_users: [],
    comment: '',
  },
  action
) => {
  console.log(action);
  switch (action.type) {
  case 'POST_SUBMISSION_REQUEST':
    return Object.assign({}, state, {});
  case 'POST_SUBMISSION_SUCCESS':
    return Object.assign({}, state, {});
  case 'POST_SUBMISSION_FAILURE':
    return Object.assign({}, state, {});
  case 'SET_VIDEO_PATH':
    return Object.assign({}, state, {
      videoPath: action.videoPath
    });
  case 'SET_CHALLENGED_USERS':
    return Object.assign({}, state, {
      challenged_users: action.challenged_users
    });
  default:
    return state;
  }
};

export default submission;
