import { combineReducers } from 'redux';
import routes from './routes.js';
import login from './login.js';
// ... other reducers

export default combineReducers({
  routes,
  login,
  // ... other reducers
});
