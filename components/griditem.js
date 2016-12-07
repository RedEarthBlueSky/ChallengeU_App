import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  itemDesign: {
    flex: 1
  },
  text: {
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  transparent: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 50,
    justifyContent: 'center'
  },
  photo: {
    width: Dimensions.get("window").width - 4,
    height: 370,
  }
});

const Item = (props) => {
  return <Image source={{ uri: props.pic}} 
    style={[styles.photo]} >
    <View style={styles.transparent}>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </View>
  </Image>
}

export default Item;