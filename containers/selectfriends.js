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

import Row from '../components/row.js';
import Header from '../components/header.js';

const onButtonPress = () => {
  // submit if this.state.actual = 0;
  // send video, send array friends
  // go to my submissions view
};


class SelectFriends extends React.Component {
  friendsList = [
    {
      "name": {
        "first": "aiden",
        "last": "lucas"
      },
      "selected": false
    },
    {
      "name": {
        "first": "arol",
        "last": "vinyolas"
      },
      "selected": false
    },
    {
      "name": {
        "first": "ian",
        "last": "salt"
      },
      "selected": false
    }
  ]

  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1 !== r2
    }
  });

  constructor(props) {
    super(props);

    this.state = {
      actual: 3,
      dataSource: this.ds.cloneWithRows(this.friendsList)
    }
  }

  onSwitchChange = (selected,data) => {
    const el = this.friendsList.find(el => (el===data))
    el.selected = selected

    const numSelected = this.friendsList.reduce((acum, el) => { 
      return el.selected ? acum+1: acum
    }, 0 )

    this.setState({ 
      dataSource: this.ds.cloneWithRows(this.friendsList),
      actual: Math.max(3 - numSelected, 0)
    }) 
  }

  onSearch(query){
    console.log(query);
  }

  render() {
    return (
      <View style = {styles.container}>
      <Text style = {{fontSize: 16, paddingLeft: 20}}> 
      Select the friends to challenge ({this.state.actual} left)
      </Text>

      <View style = {styles.button}>
      <Button
          disabled={this.state.actual === 0 ? false : true}
          onPress={onButtonPress}
          title="Submit"
        />
      </View>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={
          (data) => {
            return <Row
              data={data}
              value={data.selected}
              onValueChange={ (value,data) => this.onSwitchChange(value,data) } 
              {...data} />
          }
        }
        renderHeader={() => <Header onSearch={this.onSearch} />}
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