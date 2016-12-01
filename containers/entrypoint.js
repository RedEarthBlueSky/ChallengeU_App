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
import VideoComponent from './video.js';
import SelectFriends from './selectfriends.js';
import ChallengesScreen from './challengesscreen.js';
import SpecificChallenge from './specificchallenge.js';
import MySubmissions from './mysubmissions.js';

const RouterWithRedux = connect()(Router);

const middleware = [ apiClientService ];

const store = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="main" component={MainSceneComponent} type={ActionConst.REPLACE} title="Main" />
      <Scene key="camera" component={CameraComponent} type={ActionConst.REPLACE} title="Camera!" hideNavBar="true" />
      <Scene key="login" component={Login} type={ActionConst.REPLACE} title="Sign in with Facebook" />
      <Scene key="video" component={VideoComponent} type={ActionConst.REPLACE} title="Challenges" />
      <Scene key="select" component={SelectFriends} type={ActionConst.REPLACE} title="Challenge your friends" />
      <Scene key="challengesScreen" component={ChallengesScreen} type={ActionConst.REPLACE} title="Challenges" initial={true}/>
      <Scene key="SpecificChallenge" component={SpecificChallenge} type={ActionConst.REPLACE} title={"Challenge name"} />
      <Scene key="MySubmissions" component={MySubmissions} type={ActionConst.REPLACE} title="My submissions" />
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
