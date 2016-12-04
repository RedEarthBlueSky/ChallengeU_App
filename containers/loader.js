import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
var Spinner = require('react-native-spinkit');

import { selfLoginAction } from '../actions/login.js';

const SPINNER_TIME = 1500;

class Loader extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // delete asyncstorage and relogin until
    // AsyncStorage.removeItem('idData');
    AsyncStorage.getItem('idData').then((value) => {
      if (value && value !== '') {
        let idObj = JSON.parse(value);
        // if there is a problem delete asyncstorage and relogin
        // AsyncStorage.removeItem('idData');
        this.props.selfLoginAction(idObj.authToken);
      }
      else {
        goToLogin();
      }
    }).catch((error) => {
      // Just in case log in again
      goToLogin();
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.login &&
      nextProps.login &&
      this.props.login.authToken !== nextProps.login.authToken &&
      nextProps.login.authToken !== '') {
      console.log('gotoMain');
      goToMain();
    }
    if (this.props.login &&
      nextProps.login &&
      this.props.login.statusError !== nextProps.login.statusError &&
      nextProps.login.statusError !== '') {
      goToLogin();
    }

  }

  render() {
    let isVisible = true;
    let size = 100;
    let type = 'Wave';
    let color = '#white';
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Getting ready for challenge...
        </Text>
        <Spinner
          style={styles.spinner}
          isVisible={isVisible}
          size={size}
          type={type}
          color={color}
          />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#045',
  },
  spinner: {
    marginBottom: 50
  },
  text: {
    color: "white",
    fontSize: 25,
    marginBottom: 10
  }
});

const goToMain = () => {
  setTimeout(() => {
    Actions.challengesScreen();
  },SPINNER_TIME);
};

const goToLogin = () => {
  setTimeout(() => {
    Actions.login();
  },SPINNER_TIME);
};

const mapDispatchToProps = (dispatch) => ({
  selfLoginAction: (token) => dispatch(selfLoginAction(token))
});

export default connect((
  {routes, login})=> ({routes, login}), mapDispatchToProps
)(Loader);
