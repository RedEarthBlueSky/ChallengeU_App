
const submission = (
  state = {
    videoPath: '',
    author_id: '',
    challenge_id: '',
    challenged_users: [],
    comment: '',
    capturePath: ''
  },
  action
) => {
  console.log(action);
  switch (action.type) {
  case 'SET_VIDEO_PATH':
    return Object.assign({}, state, {
      videoPath: action.videoPath
    });
  default:
    return state;
  }
};

export default submission;