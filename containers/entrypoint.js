import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import reducers from '../reducers';
import apiClientService from '../middlewares/apiClient.js';

import MainSceneComponent from './main.js';
import Login from './login.js';

const RouterWithRedux = connect()(Router);

const middleware = [ apiClientService ];

const store = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="main" component={MainSceneComponent} type={ActionConst.REPLACE} title="Main"  />
      <Scene key="login" component={Login} type={ActionConst.REPLACE} title="Log in" initial={true}/>
    </Scene>
);

export default class ChallengeU extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes}>
        </RouterWithRedux>
      </Provider>
    );
  }
}
