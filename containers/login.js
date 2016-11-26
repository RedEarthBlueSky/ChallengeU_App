import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import { loginAction } from '../actions/login.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onLogIn = onLogIn.bind(this);
    // checkLogin();
  }

  componentWillReceiveProps (nextProps) {
    // // Example of who to detect state changes
    // if (this.props.token !== nextProps.token && nextProps.token !== '') {
    //   Actions.main();
    // }
  }

  // checkLogin() {
  //
  // }

  render() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (data.accessToken) {
          // We are already logged
          alert('Already logged!');
          console.log(data);
          // lets move to main
          Actions.main();
        }

      }
    );
    return (
      <View style={styles.login}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          class = "login"
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log('FB Data: ' + JSON.stringify(data));
                    console.log(data.accessToken.toString());
                    onLogin(data.accessToken.toString());
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

function onLogIn (token) {
  // this.props.loginAction(this.state._username,this.state._password);
  console.log(token);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  login: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    bottom: 100
  }
});

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(Login);

// AppRegistry.registerComponent('ChallengeU', () => ChallengeU);
