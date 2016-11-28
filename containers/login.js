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

import { fbLoginAction } from '../actions/login.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onLogIn = onLogIn.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.auth.authToken !== nextProps.auth.authToken && nextProps.auth.authToken !== '') {
      Actions.main();
    }
    if (this.props.auth.statusError !== nextProps.auth.statusError && nextProps.auth.statusError !== '') {
      // Logout from facebook?
    }

  }

  render() {
    AccessToken.getCurrentAccessToken()
      .then(
        (data) => {
          if (data && data.accessToken) {
            // We are already logged
            console.log('Logged!')
            Actions.main();
          } else {
            console.log('data in non compliant format');
          }
        })
      .catch((err) => {
        console.log("Error accessing FB: ",err)
      });
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}> Permissions </Text>
        <Text style = {{fontSize: 16, paddingTop: 7, paddingLeft: 6, paddingRight: 8, lineHeight: 30}}>
        In order to submit a video or challenge your friends you have to sign in with Facebook.
        We need some information to identify you and the list of friends so you can challenge them.
        </Text>
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
                  AccessToken.getCurrentAccessToken()
                    .then(
                      (data) => {
                        console.log('FB Data: ' + JSON.stringify(data));
                        console.log(data.accessToken.toString());
                        onLogIn(data.accessToken.toString());
                      })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
        </View>
      </View>
    );
  }
}

const onLogIn = (token) => {
  this.props.fbLoginAction(token);
  // In componentWillReceiveProps we check if response was OK or not
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    bottom: 100
  },

  login: {
    paddingTop: 40,
    paddingLeft: 5
  }

});

const mapDispatchToProps = (dispatch) => ({
  fbLoginAction: (token) => dispatch(fbLoginAction(token))
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(Login);
