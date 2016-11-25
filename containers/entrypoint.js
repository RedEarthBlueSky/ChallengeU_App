import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers';
import apiClientService from '../middlewares/apiClient.js';

const middleware = [ apiClientService ];

const store = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class ChallengeU extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Loading...</Text>
        </View>
      </Provider>
    );
  }
}
