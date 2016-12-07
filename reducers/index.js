import { combineReducers } from 'redux';
import routes from './routes.js';
import login from './login.js';
import submission from './submission.js';
import challenges from './challengesscreen.js';
import taggableFriends from './taggableFriends.js';
// ... other reducers

export default combineReducers({
  routes,
  login,
  submission,
  challenges,
  taggableFriends
  // ... other reducers
});
