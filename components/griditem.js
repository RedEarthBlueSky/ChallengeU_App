import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  itemDesign: {
    flex: 1
  },
  text: {
    fontSize: 22,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: 'white'
  },
  transparent: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 50,
    justifyContent: 'center'
  },
  photo: {
    flex:1,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

const Item = (props) => (
  <View style={props.style}>
    <View style={styles.itemDesign}>
      <Image source={{ uri: props.pic}} style={styles.photo} >
        <View style={styles.transparent}>
          <Text style={styles.text}>
            {props.name}
          </Text>
        </View>
      </Image>
    </View>
  </View>
);

export default Item;