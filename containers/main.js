import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ToastAndroid,
  AsyncStorage,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export default class MainSceneComponent extends Component {

  render() {
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
  };

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
