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

  onLogin = (token) => {
    this.props.fbLoginAction(token)
  }

  constructor(props) {
    super(props);

    AccessToken.getCurrentAccessToken()
      .then(
        (data) => {
          console.log(data);
          if (data && data.accessToken) {
            // We are already logged
            this.onLogIn(data.accessToken);
          } else {
            console.log('data in non compliant format');
          }
        })
      .catch((err) => {
        console.log("Error accessing FB: ",err)
      });
  }

  componentWillReceiveProps (nextProps) {
    console.log('changes!')
    if (this.props.login &&
      nextProps.login &&
      this.props.login.authToken !== nextProps.login.authToken &&
      nextProps.login.authToken !== '') {
      Actions.main();
    }
    if (this.props.login &&
      nextProps.login &&
      this.props.login.statusError !== nextProps.login.statusError &&
      nextProps.login.statusError !== '') {
      // Logout from facebook?
    }

  }

  render() {
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
                  const ctx = this;
                  AccessToken.getCurrentAccessToken()
                    .then(
                      (data) => {
                        ctx.onLogin(data.accessToken.toString());
                      })
                    .catch((err) => {
                      console.log('Error reading fbtoken: ', err);
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

export default connect(({routes, login})=>({routes, login}), mapDispatchToProps)(Login);
