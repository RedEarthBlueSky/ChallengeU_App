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

import { setIdData } from '../actions/login.js';

const SPINNER_TIME = 1500;

class Loader extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    AsyncStorage.getItem('idData').then((value) => {
      if (value && value !== '') {
        let idObj = JSON.parse(value);
        // TODO: Api call /me to check if it is right
        // if there is a problem delete asyncstorage and relogin
        // AsyncStorage.removeItem('idData');
        // this.props.setIdData(
        //   idObj.fbToken,
        //   idObj.authToken,
        //   idObj.fbId,
        //   idObj.firstName,
        //   idObj.lastName,
        //   idObj.picture,
        //   idObj.email
        // );
        // goToMain(); now it is done at the componentWillReceiveProps
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
    if (this.props.auth.authToken !== nextProps.auth.authToken && nextProps.auth.authToken !== '') {
      goToMain();
    }
    if (this.props.auth.statusError !== nextProps.auth.statusError && nextProps.auth.statusError !== '') {
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
        <Spinner style={styles.spinner} isVisible={isVisible} size={size} type={type} color={color}/>
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
    Actions.main();
  },SPINNER_TIME);
}

const goToLogin = () => {
  setTimeout(() => {
    Actions.login();
  },SPINNER_TIME);
}

const mapDispatchToProps = (dispatch) => ({
  setIdData: (fbToken, authToken, fbId, firstName, lastName, picture, email) =>
    dispatch(setIdData(fbToken, authToken, fbId, firstName, lastName, picture, email)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(Loader);
