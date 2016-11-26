import { combineReducers } from 'redux';
import routes from './routes.js';
import login from './login.js';
import submission from './submission.js';

// ... other reducers

export default combineReducers({
  routes,
  login,
  submission
  // ... other reducers
});
