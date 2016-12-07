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
  TouchableHighlight,
  Alert
} from 'react-native';

import Row from '../components/row.js';
import { postSubmission } from '../actions/submission.js';


class SelectFriends extends React.Component {

  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1 !== r2
    }
  });

  constructor(props) {
    super(props);

    this.friendsList = this.props.taggableFriends.list.slice(0);
    for (var i = 0; i < this.friendsList.length; i++) {
      this.friendsList[i].selected = false;
    }

    this.state = {
      actual: 3,
      dataSource: this.ds.cloneWithRows(this.friendsList)
    }
  }

  onButtonPress = (() => {
    // submit if this.state.actual = 0;
    // send video, send array friends
    // go to my submissions view

    // Check if three users are challenged
    if (this.state.actual === 0) {
      // Gather all data and execute submission
      let users = [];
      for (var i = 0; i < this.friendsList.length; i++) {
        if (this.friendsList[i].selected) {
          let user = {};
          user.name = this.friendsList[i].name;
          user.picture = this.friendsList[i].picture.data.url;
          users.push(user);
        }
      }
      var fileName = this.props.videoPath.split("/").pop();
      let video = {
        uri: this.props.videoPath,
      	type: 'video/mp4',
      	name: fileName,
      }
      console.log('fileName: ',fileName);
      let body = new FormData();
      body.append('videoURL', video);
      body.append('comment', 'Challenge completed!');
      body.append('challengeTypeId', this.props.challengeId);
      body.append('challengedUsers', JSON.stringify(users));
      body.append('fileName', fileName);

      this.props.postSubmission(body);

      // TODO: Force feed update when the video finishes loading
      Actions.MySubmissions();

    } else if (this.state.actual < 0) {
      Alert.alert('You have to choose just 3 friends!');
    } else if (this.state.actual > 0) {
      Alert.alert('You have to choose 3 friends!');
    }
  }).bind(this);

  onSwitchChange = (selected,data) => {
    const el = this.friendsList.find(el => (el===data))
    el.selected = selected

    const numSelected = this.friendsList.reduce((acum, el) => {
      return el.selected ? acum+1: acum
    }, 0 )
    console.log('# of selected', numSelected);

    this.setState({
      dataSource: this.ds.cloneWithRows(this.friendsList),
      actual: Math.max(3 - numSelected, 0)
    })
  }

  render() {
    // TODO: Add comment to submission
    return (
      <View style = {styles.container}>
      <Text style = {{fontSize: 16, paddingLeft: 20}}>
      Select the friends to challenge ({this.state.actual} left)
      </Text>

      <View style = {styles.button}>
      <Button
          disabled={this.state.actual === 0 ? false : true}
          onPress={this.onButtonPress}
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
  postSubmission: (submission) => dispatch(postSubmission(submission))
});

export default connect(
  ({routes, auth, taggableFriends, submission})=>
  ({routes, auth, taggableFriends}),
  mapDispatchToProps)(SelectFriends);
