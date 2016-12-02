import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { challengesList } from '../actions/challengesscreen.js';


import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Item from '../components/griditem.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 55 
  },
  grid: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  gridItem: {
    flex:1,
    width: 178,
    height: 178,
    margin:3
  },
  gridFirst: {
    flex:1,
    width: 360,
    height: 360,
    margin:3
  }
});


class ChallengesScreen extends React.Component {

  constructor(props) {
    super(props);

    this.props.challengesList()

    this.state = {
    };
  }

  items = function() {
    let itemsList = [];
    for (let i = 1; i < this.props.challenges.list.length; i++) {
      itemsList.push(
        <Item key={i} 
          style={styles.gridItem} 
          pic={this.props.challenges.list[i].imageURL} 
          name={this.props.challenges.list[i].title} />
      )
    }
    return itemsList
  }

  action = (data) => {
    Actions.SpecificChallenge({title: 'Ice Bucket Challenge'})
  }

  render() {
    if (this.props.challenges.list.length === 0) return <View></View>;
    return (
      <TouchableOpacity onPress={this.action}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.grid}>
              <Item style={styles.gridFirst} pic={this.props.challenges.list[0].imageURL} name={this.props.challenges.list[0].title} />
              {this.items()}
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  challengesList: () => dispatch(challengesList()),
});

export default connect(({routes, challenges})=>({routes, challenges}), mapDispatchToProps)(ChallengesScreen);