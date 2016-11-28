import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';


const Row = (props) => (
  <View style={styles.container}>
    <Switch/>
    <Text style={styles.text}>
      {`${props.name.first} ${props.name.last}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

export default Row;