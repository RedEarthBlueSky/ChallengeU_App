import { CALL_API } from '../middlewares/apiClient';

export const postSubmission = (submission) => {
  return {
    [CALL_API]: {
      method: 'POST',
      type:'POST_SUBMISSION',
      endpoint:'/submission',
      multipart: true,
      data: submission
    }
  };
};

// Deprecated actions
export const setVideo = (videoPath) => ({
  type: 'SET_VIDEO_PATH',
  videoPath
});

export const setUsers = (challenged_users) => ({
  type: 'SET_CHALLENGED_USERS',
  challenged_users
});
