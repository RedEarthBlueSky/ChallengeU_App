import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Switch,
  ListView,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Row from './row.js';

const onButtonPress = () => {
  // do something;
};

class SelectFriends extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      actual: 3,
      dataSource: ds.cloneWithRows([
      {
      "name": {
        "first": "aiden",
        "last": "lucas"
      }},
      {
      "name": {
        "first": "arol",
        "last": "vinyolas"
      }},
      {
      "name": {
        "first": "ian",
        "last": "salt"
      }}])
    }
  }

  render() {
    return (
      <View style = {styles.container}>
      <Text style = {{fontSize: 16, paddingLeft: 20}}> 
      Select the friends to challenge ({this.state.actual} left)
      </Text>

      <View style = {styles.button}>
      <Button
          onPress={onButtonPress}
          title="Submit"
          accessibilityLabel="See an informative alert"
        />
      </View>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  button: {
    paddingTop: 20,
    paddingLeft: 20,
    height: 60,
    width: 250
  }

});

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(SelectFriends);