import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


class SideMenu extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={Actions.MySubmissions}>
          <Text style={styles.text}>
            My submissions
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity onPress={Actions.challengesScreen}>
          <Text style={styles.text}>
            Challenges
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity onPress={Actions.feed}>
          <Text style={styles.text}>
            Feed
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  text: {
    lineHeight: 50,
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white'
  },
  separator: {
    height: 1,
    marginRight: 20,
    backgroundColor: 'white'
  }
});

export default SideMenu;