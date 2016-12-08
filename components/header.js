import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filter..."
        onChangeText={(text) => props.onSearch(text)}
      />
    </View>
)};

export default Header;