import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getChallengeSubmissions } from '../actions/submissions.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
  Button,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Challenge from '../components/challenge.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  }
});

const action = (challengeId) => {
    Actions.camera({challengeId})
}

class SpecificChallenge extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.getChallengeSubmissions(this.props.challengeId)
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.submissions),
    };

    if (this.props.submissions.length > 0) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 8}}> {this.props.submissions[0].challengeTypeId.description} </Text>
          <View style={styles.header}>
            <View style={{height:60, width:120}}>
              <Button
              onPress={() => action(this.props.submissions[0].challengeTypeId._id)}
              title="Take it!"
              />
            </View>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <Challenge {...data} />}
          />
        </View>
      );
    } else return <View></View>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes,
    submissions: state.submissions
  }
}

const mapDispatchToProps = (dispatch) => ({
  getChallengeSubmissions: (id) => dispatch(getChallengeSubmissions(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecificChallenge);