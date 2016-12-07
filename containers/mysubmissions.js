import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getSelfSubmissions } from '../actions/submissions.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Submission from '../components/submission.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

class MySubmission extends React.Component {

  constructor(props) {
    super(props);
    this.props.getSelfSubmissions()
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.submissions),
    };

    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Submission {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes,
    submissions: state.submissions
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSelfSubmissions: () => dispatch(getSelfSubmissions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MySubmission);
