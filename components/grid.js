import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  num: {
    fontSize: 18,
    textAlign: 'right'
  },
  photo: {
    height: 350,
    width: 350,
    borderRadius: 5,
  },
});

const Grid = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.pic}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.name}`} 
        <Text style={styles.num}> 
          {`${props.views}`}
        </Text>
    </Text>
  </View>
);

export default Grid;