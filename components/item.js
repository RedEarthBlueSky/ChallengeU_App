import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  itemDesign: {
    flex: 1
  },
  text: {
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white'
  },
  photo: {
    flex:1,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

const prova = () => {
  console.log('pressed');
  Actions.select();
};

const Item = (props) => (
  <View style={props.style}>
    <View style={styles.itemDesign}>
      <Image source={{ uri: props.pic}} style={styles.photo} >
        <Text style={styles.text}>
          {props.name}
        </Text>
      </Image>
    </View>
  </View>
);

export default Item;