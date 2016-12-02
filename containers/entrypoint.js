import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import reducers from '../reducers';
import apiClientService from '../middlewares/apiClient.js';

import MainSceneComponent from './main.js';
import Login from './login.js';
import CameraComponent from './camera.js';
import Challenges from './challenges.js';
import Loader from './loader.js';


const RouterWithRedux = connect()(Router);

const middleware = [ apiClientService ];

const store = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="camera" component={CameraComponent} type={ActionConst.REPLACE} title="Camera!" hideNavBar="true" />
      <Scene key="challenges" component={Challenges} type={ActionConst.REPLACE} title="Challenges" />
      <Scene key="loader" hideNavBar="true" component={Loader} type={ActionConst.REPLACE} title="Ready for challenge?" initial={true} />
      <Scene key="main" component={MainSceneComponent} type={ActionConst.REPLACE} title="Main"  />
      <Scene key="login" component={Login} type={ActionConst.REPLACE} title="Sign in with Facebook" />
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
