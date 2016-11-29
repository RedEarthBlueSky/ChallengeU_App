import { combineReducers } from 'redux';
import routes from './routes.js';
import auth from './login.js';
// ... other reducers

export default combineReducers({
  routes,
  auth,
  // ... other reducers
});
