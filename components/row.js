import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';


class Row extends React.Component{
  render() {
    const { data, onValueChange, ...props } = this.props
    return <View style={styles.container}>
      <Switch
        onValueChange={(value)=> { this.props.onValueChange(value, data) }}
        {...props}
        />
      <Text style={styles.text}>
        {`${this.props.name}`}
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'patuaone',  
    marginLeft: 12,
    fontSize: 16,
  }
});

export default Row;
