import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  itemDesign: {
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 10
  },
  transparent: {
    height: 80
  },
  photo: {
    width: Dimensions.get("window").width - 4,
    height: 370,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center'
  }
});

const Item = (props) => {
  return <Image source={{ uri: props.pic}} 
    style={[styles.photo]} >
    <View style={styles.transparent}>
      <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']} style={styles.linearGradient}>
        <Text style={styles.text}>
          {props.name}
        </Text>
      </LinearGradient>
    </View>
  </Image>
}

export default Item;