import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  information: {
    flexDirection: 'column'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 30
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  video: {
    height: 180,
    width: Dimensions.get("window").width
  }
});

const Challenge = (props) => (
  <View style={{flex: 1}}>
    <View style={styles.container}>
      <Image source={{ uri: props.pictureId}} style={styles.photo} />
      <Text style={styles.text}>
        {`${props.authorId} took the`} <Text style={{fontWeight: 'bold'}}> "challenge name" </Text>
      </Text>
    </View>
    <View style={styles.information}>
      <Image source={{ uri: props.captureURL}} style={styles.video} />
      <Text style={styles.text}> ${props.authorId} has engaged NUM people </Text>
      <Text style={styles.text}> NUMTOTAL took the challenge in total </Text>
    </View>
  </View>
);

export default Challenge;